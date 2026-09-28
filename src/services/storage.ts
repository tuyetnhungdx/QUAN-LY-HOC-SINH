/**
 * storage.ts
 * Quản lý lưu trữ dữ liệu cục bộ (localStorage) cho Web App:
 * "TRỢ LÝ QUẢN TRỊ HỌC TẬP – CÔ TRẦN THỊ TUYẾT NHUNG"
 * 
 * GIẢI THÍCH LOCALSTORAGE:
 * - LocalStorage được sử dụng để lưu toàn bộ dữ liệu (Lớp học, Học sinh, Bài học, Nhiệm vụ,
 *   Điểm số, Nhận xét, Nhật ký hoạt động, Hồ sơ giáo viên) trực tiếp trên trình duyệt của giáo viên.
 * - Ưu điểm: Hoạt động hoàn toàn ngoại tuyến (offline), không cần internet hay máy chủ,
 *   bảo mật thông tin nội bộ trên thiết bị của giáo viên, dữ liệu được giữ nguyên
 *   khi tải lại trang hoặc tắt mở trình duyệt.
 * - Cung cấp tính năng Xuất/Nhập tệp JSON để giáo viên dễ dàng sao lưu, di chuyển dữ liệu
 *   giữa máy tính ở trường và máy tính/máy tính bảng ở nhà.
 */

import { AppData, TeacherProfile } from '../types';
import { initialAppData, initialTeacherProfile, initialClasses } from '../data/sampleData';

const STORAGE_KEY = 'tro_ly_giao_vien_tuyet_nhung_v2';
const PREV_STORAGE_KEY = 'tro_ly_giao_vien_tuyet_nhung_v1';
const LEGACY_STORAGE_KEY = 'tro_ly_giao_vien_duong_thanh_tin_v1';

export function loadAppData(): AppData {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      raw = localStorage.getItem(PREV_STORAGE_KEY);
    }
    if (!raw) {
      raw = localStorage.getItem(LEGACY_STORAGE_KEY);
    }
    if (!raw) {
      // Nếu chưa có dữ liệu, khởi tạo bằng dữ liệu mẫu
      saveAppData(initialAppData);
      return initialAppData;
    }
    const parsed = JSON.parse(raw) as Partial<AppData>;
    
    // Đảm bảo hồ sơ giáo viên cập nhật đúng thông tin Cô Trần Thị Tuyết Nhung
    let teacherProfile: TeacherProfile = parsed.teacherProfile || initialTeacherProfile;
    if (!teacherProfile || teacherProfile.fullName.includes('Dương Thành Tín')) {
      teacherProfile = initialTeacherProfile;
    }

    const currentClasses = parsed.classes || [];
    const targetClassNames = ['12-1', '12-2', '12-3', '12-5'];
    const hasOldClasses = currentClasses.some((c) =>
      ['6A1', '7A1', '8A1', '9A1', '10A1', '10A2', '11A1', '12A1'].includes(c.name)
    );
    const missingTargetClasses = !targetClassNames.every((name) =>
      currentClasses.some((c) => c.name === name)
    );

    let classes = currentClasses;
    let students = parsed.students || initialAppData.students;
    let lessons = parsed.lessons || initialAppData.lessons;
    let tasks = parsed.tasks || initialAppData.tasks;
    let grades = parsed.grades || initialAppData.grades;
    let comments = parsed.comments || initialAppData.comments;

    // Tự động nâng cấp sang 4 lớp 12-1, 12-2, 12-3, 12-5 nếu dữ liệu cũ còn sót các lớp 6A1, 7A1...
    if (hasOldClasses || missingTargetClasses || classes.length === 0) {
      const classMap: Record<string, string> = {};
      if (classes.length >= 4) {
        classMap[classes[0]?.id] = 'c-12-1';
        classMap[classes[1]?.id] = 'c-12-2';
        classMap[classes[2]?.id] = 'c-12-3';
        classMap[classes[3]?.id] = 'c-12-5';
      }
      classes = initialClasses;

      // Remap sang ID lớp mới
      students = students.map((s) => ({
        ...s,
        classId: classMap[s.classId] || (classes.some((c) => c.id === s.classId) ? s.classId : 'c-12-1'),
      }));
      lessons = lessons.map((l) => ({
        ...l,
        classId: classMap[l.classId] || (classes.some((c) => c.id === l.classId) ? l.classId : 'c-12-1'),
      }));
      tasks = tasks.map((t) => ({
        ...t,
        classId: classMap[t.classId] || (classes.some((c) => c.id === t.classId) ? t.classId : 'c-12-1'),
      }));
      grades = grades.map((g) => ({
        ...g,
        classId: classMap[g.classId] || (classes.some((c) => c.id === g.classId) ? g.classId : 'c-12-1'),
      }));
      comments = comments.map((cm) => ({
        ...cm,
        classId: classMap[cm.classId] || (classes.some((c) => c.id === cm.classId) ? cm.classId : 'c-12-1'),
      }));
    }

    const mergedData: AppData = {
      classes,
      students,
      lessons,
      tasks,
      grades,
      comments,
      activityLogs: parsed.activityLogs || initialAppData.activityLogs,
      soundEnabled: typeof parsed.soundEnabled === 'boolean' ? parsed.soundEnabled : false,
      teacherProfile,
    };
    saveAppData(mergedData);
    return mergedData;
  } catch (error) {
    console.error('Lỗi khi đọc dữ liệu từ localStorage:', error);
    return initialAppData;
  }
}

export function saveAppData(data: AppData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Lỗi khi lưu dữ liệu vào localStorage:', error);
  }
}

export function resetAppData(): AppData {
  saveAppData(initialAppData);
  return initialAppData;
}

export function clearAppData(): AppData {
  const emptyData: AppData = {
    classes: [],
    students: [],
    lessons: [],
    tasks: [],
    grades: [],
    comments: [],
    activityLogs: [],
    soundEnabled: false,
    teacherProfile: initialTeacherProfile,
  };
  saveAppData(emptyData);
  return emptyData;
}

export function exportAppDataToFile(data: AppData): void {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const now = new Date();
  const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  link.href = url;
  link.download = `DuLieu_TroLy_CoTranThiTuyetNhung_${dateStr}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function importAppDataFromFile(file: File): Promise<AppData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = JSON.parse(text);
        if (!parsed || !Array.isArray(parsed.classes) || !Array.isArray(parsed.students)) {
          throw new Error('Định dạng tệp JSON không hợp lệ, thiếu danh sách lớp hoặc học sinh.');
        }
        const validated: AppData = {
          classes: parsed.classes || [],
          students: parsed.students || [],
          lessons: parsed.lessons || [],
          tasks: parsed.tasks || [],
          grades: parsed.grades || [],
          comments: parsed.comments || [],
          activityLogs: parsed.activityLogs || [],
          soundEnabled: typeof parsed.soundEnabled === 'boolean' ? parsed.soundEnabled : false,
          teacherProfile: parsed.teacherProfile || initialTeacherProfile,
        };
        saveAppData(validated);
        resolve(validated);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('Không thể đọc tệp tin.'));
    reader.readAsText(file);
  });
}

export function playChime(type: 'success' | 'warning' = 'success', enabled: boolean = true): void {
  if (!enabled) return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    if (type === 'success') {
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
    } else {
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(330, ctx.currentTime + 0.15);
    }

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch {
    // Ignore audio context errors if browser blocks autoplay
  }
}

