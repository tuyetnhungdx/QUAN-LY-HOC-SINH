/**
 * Dữ liệu mẫu minh họa cho môn Tin học THPT
 * Cô giáo: Trần Thị Tuyết Nhung - Trường THPT Nguyễn Dục
 * 4 lớp giảng dạy: Lớp 12-1, Lớp 12-2, Lớp 12-3, Lớp 12-5 (Khối 12)
 */

import { AppData, ClassItem, Student, Lesson, LearningTask, GradeEntry, StudentComment, ActivityLog, TeacherProfile } from '../types';

export const initialTeacherProfile: TeacherProfile = {
  title: 'Cô',
  fullName: 'Trần Thị Tuyết Nhung',
  subject: 'Tin học',
  school: 'THPT Nguyễn Dục'
};

export const initialClasses: ClassItem[] = [
  {
    id: 'c-12-1',
    name: '12-1',
    gradeLevel: 12,
    room: 'Phòng Máy 01',
    academicYear: '2025-2026',
    note: 'Lớp 12-1 - Môn Tin học THPT Nguyễn Dục'
  },
  {
    id: 'c-12-2',
    name: '12-2',
    gradeLevel: 12,
    room: 'Phòng Máy 02',
    academicYear: '2025-2026',
    note: 'Lớp 12-2 - Môn Tin học THPT Nguyễn Dục'
  },
  {
    id: 'c-12-3',
    name: '12-3',
    gradeLevel: 12,
    room: 'Phòng Máy 01',
    academicYear: '2025-2026',
    note: 'Lớp 12-3 - Môn Tin học THPT Nguyễn Dục'
  },
  {
    id: 'c-12-5',
    name: '12-5',
    gradeLevel: 12,
    room: 'Phòng Máy 03',
    academicYear: '2025-2026',
    note: 'Lớp 12-5 - Môn Tin học THPT Nguyễn Dục'
  }
];

export const initialStudents: Student[] = [
  // Lớp 12-1
  { id: 's-121-01', studentCode: 'HS1201', fullName: 'Nguyễn Hoàng Nam', classId: 'c-12-1', gender: 'Nam', status: 'Đang học', note: 'Thao tác máy tính nhanh, tiếp thu kiến thức tốt' },
  { id: 's-121-02', studentCode: 'HS1202', fullName: 'Trần Thị Mai Anh', classId: 'c-12-1', gender: 'Nữ', status: 'Đang học', note: 'Chăm ngoan, thực hành cẩn thận' },
  { id: 's-121-03', studentCode: 'HS1203', fullName: 'Lê Minh Đức', classId: 'c-12-1', gender: 'Nam', status: 'Đang học', note: 'Cần rèn luyện thêm kỹ năng cấu hình mạng', needAttention: true },
  { id: 's-121-04', studentCode: 'HS1204', fullName: 'Phạm Thuỳ Linh', classId: 'c-12-1', gender: 'Nữ', status: 'Đang học', note: 'Tích cực hỗ trợ các bạn trong giờ thực hành máy tính' },
  { id: 's-121-05', studentCode: 'HS1205', fullName: 'Đỗ Quang Huy', classId: 'c-12-1', gender: 'Nam', status: 'Đang học', note: 'Cần nộp bài tập thực hành đúng hạn hơn', needAttention: true },
  { id: 's-121-06', studentCode: 'HS1206', fullName: 'Vũ Ngọc Bảo Trâm', classId: 'c-12-1', gender: 'Nữ', status: 'Đang học', note: 'Thao tác bảng tính và thiết kế số tốt' },

  // Lớp 12-2
  { id: 's-122-01', studentCode: 'HS1211', fullName: 'Hoàng Quốc Tuấn', classId: 'c-12-2', gender: 'Nam', status: 'Đang học', note: 'Sử dụng phần mềm ứng dụng rất thành thạo' },
  { id: 's-122-02', studentCode: 'HS1212', fullName: 'Bùi Thanh Hằng', classId: 'c-12-2', gender: 'Nữ', status: 'Đang học', note: 'Trình bày bài thực hành khoa học, rõ ràng' },
  { id: 's-122-03', studentCode: 'HS1213', fullName: 'Nguyễn Đình Phúc', classId: 'c-12-2', gender: 'Nam', status: 'Đang học', note: 'Cần củng cố kiến thức an toàn thông tin số', needAttention: true },
  { id: 's-122-04', studentCode: 'HS1214', fullName: 'Đặng Ngọc Ánh', classId: 'c-12-2', gender: 'Nữ', status: 'Đang học', note: 'Thuyết trình dự án Tin học lưu loát' },
  { id: 's-122-05', studentCode: 'HS1215', fullName: 'Phan Trọng Khang', classId: 'c-12-2', gender: 'Nam', status: 'Đang học', note: 'Hoàn thành tốt các bài tập thực hành' },

  // Lớp 12-3
  { id: 's-123-01', studentCode: 'HS1221', fullName: 'Trịnh Gia Bảo', classId: 'c-12-3', gender: 'Nam', status: 'Đang học', note: 'Tư duy thuật toán và lập trình rất tốt' },
  { id: 's-123-02', studentCode: 'HS1222', fullName: 'Ngô Thảo My', classId: 'c-12-3', gender: 'Nữ', status: 'Đang học', note: 'Thiết kế cấu trúc dữ liệu bảng biểu chuẩn' },
  { id: 's-123-03', studentCode: 'HS1223', fullName: 'Võ Minh Quân', classId: 'c-12-3', gender: 'Nam', status: 'Đang học', note: 'Cần chú ý thao tác truy vấn dữ liệu' },
  { id: 's-123-04', studentCode: 'HS1224', fullName: 'Lý Diệu Anh', classId: 'c-12-3', gender: 'Nữ', status: 'Đang học', note: 'Thực hành máy tính nhanh và chính xác' },
  { id: 's-123-05', studentCode: 'HS1225', fullName: 'Hồ Tuấn Kiệt', classId: 'c-12-3', gender: 'Nam', status: 'Đang học', note: 'Tiến bộ nhanh trong các bài kiểm tra thực hành' },

  // Lớp 12-5
  { id: 's-125-01', studentCode: 'HS1231', fullName: 'Dương Khánh Linh', classId: 'c-12-5', gender: 'Nữ', status: 'Đang học', note: 'Học lực xuất sắc môn Tin học, khả năng tự nghiên cứu cao' },
  { id: 's-125-02', studentCode: 'HS1232', fullName: 'Vũ Đức Thịnh', classId: 'c-12-5', gender: 'Nam', status: 'Đang học', note: 'Cần luyện thêm về cấu hình giao thức mạng máy tính', needAttention: true },
  { id: 's-125-03', studentCode: 'HS1233', fullName: 'Trần Bích Phương', classId: 'c-12-5', gender: 'Nữ', status: 'Đang học', note: 'Hiểu sâu về an toàn thông tin và đạo đức số' },
  { id: 's-125-04', studentCode: 'HS1234', fullName: 'Lê Hoàng Long', classId: 'c-12-5', gender: 'Nam', status: 'Đang học', note: 'Đam mê lập trình và ứng dụng công nghệ thông tin' },
  { id: 's-125-05', studentCode: 'HS1235', fullName: 'Nguyễn Ngọc Yến', classId: 'c-12-5', gender: 'Nữ', status: 'Đang học', note: 'Ghi chép và thực hành đầy đủ các chuyên đề' }
];

export const initialLessons: Lesson[] = [
  {
    id: 'l-01',
    title: 'Mạng máy tính: Địa chỉ IP, giao thức TCP/IP và hệ thống DNS',
    classId: 'c-12-1',
    topic: 'Chủ đề: Mạng máy tính & Dịch vụ Internet',
    objectives: 'Hiểu cấu trúc mạng LAN/WAN, cơ chế phân giải tên miền DNS và cách kiểm tra kết nối với lệnh ping/tracert.',
    summary: 'Thực hành cấu hình mạng cơ bản trong phòng máy tính trường THPT Nguyễn Dục.',
    teachDate: '2026-09-18',
    status: 'Đang dạy'
  },
  {
    id: 'l-02',
    title: 'An toàn trên không gian mạng và Bảo vệ dữ liệu số',
    classId: 'c-12-1',
    topic: 'Chủ đề: Đạo đức, pháp luật và văn hóa ứng xử số',
    objectives: 'Nhận biết các hình thức tấn công mạng, cài đặt bảo mật và đạo đức ứng xử trên môi trường số.',
    summary: 'Thảo luận tình huống thực tế và bài tập kiểm tra nhận thức an toàn thông tin.',
    teachDate: '2026-09-22',
    status: 'Chưa dạy'
  },
  {
    id: 'l-03',
    title: 'Cơ sở dữ liệu quan hệ: Khái niệm bảng, khóa chính và liên kết',
    classId: 'c-12-2',
    topic: 'Chủ đề: Cơ sở dữ liệu và Hệ quản trị CSDL',
    objectives: 'Hiểu bản chất bảng dữ liệu quan hệ, xác định khóa chính và tạo liên kết giữa các bảng.',
    summary: 'Thực hành thiết kế bảng dữ liệu quản lý học sinh và điểm số trên máy tính.',
    teachDate: '2026-09-17',
    status: 'Đã hoàn thành'
  },
  {
    id: 'l-04',
    title: 'Hệ quản trị CSDL: Tạo bảng và thiết lập ràng buộc toàn vẹn',
    classId: 'c-12-2',
    topic: 'Chủ đề: Cơ sở dữ liệu và Hệ quản trị CSDL',
    objectives: 'Thành thạo tạo bảng, đặt kiểu dữ liệu trường và nhập liệu kiểm tra ràng buộc.',
    summary: 'Thực hành trực tiếp trong phòng máy tính 02 trường THPT Nguyễn Dục.',
    teachDate: '2026-09-19',
    status: 'Đang dạy'
  },
  {
    id: 'l-05',
    title: 'Truy vấn dữ liệu với ngôn ngữ SQL: Lệnh SELECT và mệnh đề WHERE',
    classId: 'c-12-3',
    topic: 'Chủ đề: Ngôn ngữ truy vấn SQL',
    objectives: 'Viết câu truy vấn trích xuất dữ liệu có điều kiện, sắp xếp ORDER BY.',
    summary: 'Thực hành 5 bài tập lọc danh sách học sinh và điểm thi trên hệ thống.',
    teachDate: '2026-09-18',
    status: 'Đang dạy'
  },
  {
    id: 'l-06',
    title: 'Tổng quan về Trí tuệ nhân tạo (AI) và Ứng dụng trong đời sống',
    classId: 'c-12-5',
    topic: 'Chủ đề: Xu hướng công nghệ mới',
    objectives: 'Hiểu khái niệm AI, Machine Learning và các ứng dụng AI tạo sinh có trách nhiệm.',
    summary: 'Thảo luận ứng dụng AI trong học tập, cơ hội nghề nghiệp và thách thức đạo đức đối với học sinh cuối cấp.',
    teachDate: '2026-09-16',
    status: 'Đã hoàn thành'
  },
  {
    id: 'l-07',
    title: 'Dự án Tin học: Xây dựng giải pháp số hóa quản lý học tập',
    classId: 'c-12-5',
    topic: 'Chủ đề: Dự án ứng dụng Tin học',
    objectives: 'Phối hợp nhóm thiết kế bảng tính và mẫu báo cáo số hóa phục vụ học tập.',
    summary: 'Báo cáo tiến độ dự án học tập theo nhóm của lớp 12-5.',
    teachDate: '2026-09-25',
    status: 'Chưa dạy'
  }
];

export const initialTasks: LearningTask[] = [
  {
    id: 't-01',
    title: 'Thực hành kiểm tra địa chỉ IP và kết nối mạng bằng lệnh CMD',
    classId: 'c-12-1',
    lessonId: 'l-01',
    description: 'Sử dụng lệnh ipconfig, ping để kiểm tra kết nối giữa các máy trong phòng thực hành.',
    dueDate: '2026-09-19',
    priority: 'Bình thường',
    status: 'Đang thực hiện',
    completedStudentIds: ['s-121-01', 's-121-02', 's-121-04', 's-121-06']
  },
  {
    id: 't-02',
    title: 'Bài tập: Phân tích 3 tình huống lừa đảo mạng và giải pháp phòng tránh',
    classId: 'c-12-1',
    lessonId: 'l-02',
    description: 'Viết báo cáo ngắn gọn nêu rõ dấu hiệu nhận biết và cách ứng phó bảo mật.',
    dueDate: '2026-09-23',
    priority: 'Quan trọng',
    status: 'Đã giao',
    completedStudentIds: ['s-121-02', 's-121-04']
  },
  {
    id: 't-03',
    title: 'Thiết kế cấu trúc bảng CSDL Quản lý Thư viện',
    classId: 'c-12-2',
    lessonId: 'l-03',
    description: 'Xác định các trường thông tin, kiểu dữ liệu và chỉ định khóa chính cho bảng Sách và bảng Mượn.',
    dueDate: '2026-09-19',
    priority: 'Quan trọng',
    status: 'Đang thực hiện',
    completedStudentIds: ['s-122-01', 's-122-02', 's-122-04', 's-122-05']
  },
  {
    id: 't-04',
    title: 'Viết câu lệnh SQL lọc danh sách học sinh theo điểm số',
    classId: 'c-12-3',
    lessonId: 'l-05',
    description: 'Viết các câu lệnh SELECT với điều kiện điểm >= 8.0 và sắp xếp giảm dần.',
    dueDate: '2026-09-21',
    priority: 'Khẩn cấp',
    status: 'Đã giao',
    completedStudentIds: ['s-123-01', 's-123-02', 's-123-04']
  },
  {
    id: 't-05',
    title: 'Tìm hiểu 2 công cụ AI tạo sinh hỗ trợ học tập',
    classId: 'c-12-5',
    lessonId: 'l-06',
    description: 'Chuẩn bị tóm tắt 1 trang về tính năng, ưu điểm và lưu ý an toàn dữ liệu.',
    dueDate: '2026-09-18',
    priority: 'Quan trọng',
    status: 'Đã hoàn thành',
    completedStudentIds: ['s-125-01', 's-125-02', 's-125-03', 's-125-04', 's-125-05']
  },
  {
    id: 't-06',
    title: 'Lập dàn ý kế hoạch dự án số hóa học tập',
    classId: 'c-12-5',
    lessonId: 'l-07',
    description: 'Phân công nhiệm vụ nhóm và phác thảo các biểu mẫu dữ liệu cần số hóa.',
    dueDate: '2026-09-26',
    priority: 'Bình thường',
    status: 'Chưa giao',
    completedStudentIds: []
  }
];

export const initialGrades: GradeEntry[] = [
  // Lớp 12-1
  { id: 'g-01', studentId: 's-121-01', classId: 'c-12-1', activityTitle: 'Thực hành máy tính: Cấu hình mạng LAN', score: 9.0, date: '2026-09-15', note: 'Thao tác câu lệnh mạng chính xác' },
  { id: 'g-02', studentId: 's-121-02', classId: 'c-12-1', activityTitle: 'Thực hành máy tính: Cấu hình mạng LAN', score: 9.5, date: '2026-09-15', note: 'Bài làm xuất sắc, báo cáo đầy đủ' },
  { id: 'g-03', studentId: 's-121-03', classId: 'c-12-1', activityTitle: 'Thực hành máy tính: Cấu hình mạng LAN', score: 6.5, date: '2026-09-15', note: 'Cần ôn lại cấu trúc địa chỉ IPv4' },
  { id: 'g-04', studentId: 's-121-04', classId: 'c-12-1', activityTitle: 'Thực hành máy tính: Cấu hình mạng LAN', score: 8.5, date: '2026-09-15', note: 'Nắm chắc kiến thức, thao tác máy tốt' },
  { id: 'g-05', studentId: 's-121-05', classId: 'c-12-1', activityTitle: 'Thực hành máy tính: Cấu hình mạng LAN', score: 6.0, date: '2026-09-15', note: 'Cần làm xong bài thực hành sớm hơn' },
  { id: 'g-06', studentId: 's-121-06', classId: 'c-12-1', activityTitle: 'Thực hành máy tính: Cấu hình mạng LAN', score: 8.5, date: '2026-09-15', note: 'Trình bày kết quả rõ ràng' },

  // Lớp 12-2
  { id: 'g-07', studentId: 's-122-01', classId: 'c-12-2', activityTitle: 'Kiểm tra 15p: Cơ sở dữ liệu quan hệ', score: 8.5, date: '2026-09-14', note: 'Xác định khóa chính và liên kết chính xác' },
  { id: 'g-08', studentId: 's-122-02', classId: 'c-12-2', activityTitle: 'Kiểm tra 15p: Cơ sở dữ liệu quan hệ', score: 9.0, date: '2026-09-14', note: 'Thiết kế bảng biểu chuẩn hóa' },
  { id: 'g-09', studentId: 's-122-03', classId: 'c-12-2', activityTitle: 'Kiểm tra 15p: Cơ sở dữ liệu quan hệ', score: 6.5, date: '2026-09-14', note: 'Cần chú ý kiểu dữ liệu của các trường' },
  { id: 'g-10', studentId: 's-122-04', classId: 'c-12-2', activityTitle: 'Kiểm tra 15p: Cơ sở dữ liệu quan hệ', score: 9.0, date: '2026-09-14', note: 'Bài làm xuất sắc' },
  { id: 'g-11', studentId: 's-122-05', classId: 'c-12-2', activityTitle: 'Kiểm tra 15p: Cơ sở dữ liệu quan hệ', score: 8.0, date: '2026-09-14', note: 'Làm đúng trọng tâm' },

  // Lớp 12-3
  { id: 'g-12', studentId: 's-123-01', classId: 'c-12-3', activityTitle: 'Kiểm tra thực hành: Truy vấn SQL', score: 9.5, date: '2026-09-16', note: 'Câu lệnh SQL chuẩn xác, tối ưu' },
  { id: 'g-13', studentId: 's-123-02', classId: 'c-12-3', activityTitle: 'Kiểm tra thực hành: Truy vấn SQL', score: 8.5, date: '2026-09-16', note: 'Kết quả truy vấn đúng yêu cầu' },
  { id: 'g-14', studentId: 's-123-03', classId: 'c-12-3', activityTitle: 'Kiểm tra thực hành: Truy vấn SQL', score: 7.0, date: '2026-09-16', note: 'Cần rèn thêm mệnh đề ORDER BY' },
  { id: 'g-15', studentId: 's-123-04', classId: 'c-12-3', activityTitle: 'Kiểm tra thực hành: Truy vấn SQL', score: 9.0, date: '2026-09-16', note: 'Hoàn thành bài tập nâng cao' },
  { id: 'g-16', studentId: 's-123-05', classId: 'c-12-3', activityTitle: 'Kiểm tra thực hành: Truy vấn SQL', score: 7.5, date: '2026-09-16', note: 'Có nhiều tiến bộ trong thực hành' },

  // Lớp 12-5
  { id: 'g-17', studentId: 's-125-01', classId: 'c-12-5', activityTitle: 'Bài kiểm tra chuyên đề: Trí tuệ nhân tạo', score: 9.5, date: '2026-09-17', note: 'Hiểu sâu bản chất các mô hình AI' },
  { id: 'g-18', studentId: 's-125-02', classId: 'c-12-5', activityTitle: 'Bài kiểm tra chuyên đề: Trí tuệ nhân tạo', score: 7.0, date: '2026-09-17', note: 'Cần ôn lại các khái niệm Machine Learning' },
  { id: 'g-19', studentId: 's-125-03', classId: 'c-12-5', activityTitle: 'Bài kiểm tra chuyên đề: Trí tuệ nhân tạo', score: 9.0, date: '2026-09-17', note: 'Phân tích an toàn thông tin rất chặt chẽ' },
  { id: 'g-20', studentId: 's-125-04', classId: 'c-12-5', activityTitle: 'Bài kiểm tra chuyên đề: Trí tuệ nhân tạo', score: 8.5, date: '2026-09-17', note: 'Hiểu bài tốt và vận dụng linh hoạt' },
  { id: 'g-21', studentId: 's-125-05', classId: 'c-12-5', activityTitle: 'Bài kiểm tra chuyên đề: Trí tuệ nhân tạo', score: 8.5, date: '2026-09-17', note: 'Bài làm cẩn thận, nắm vững lý thuyết' }
];

export const initialComments: StudentComment[] = [
  {
    id: 'cm-01',
    studentId: 's-121-01',
    classId: 'c-12-1',
    date: '2026-09-16',
    content: 'Thao tác cấu hình mạng nhanh nhẹn, tự tìm tòi giải quyết lỗi kết nối trước khi hỏi giáo viên.',
    skillCategory: 'Thực hành máy tính',
    note: 'Khen ngợi trước lớp'
  },
  {
    id: 'cm-02',
    studentId: 's-121-03',
    classId: 'c-12-1',
    date: '2026-09-17',
    content: 'Còn gặp khó khăn khi chia địa chỉ IP subnet, cần theo dõi kỹ hướng dẫn mẫu của cô.',
    skillCategory: 'Thực hành máy tính',
    note: 'Cô đã hướng dẫn phụ đạo thêm cuối tiết thực hành'
  },
  {
    id: 'cm-03',
    studentId: 's-122-04',
    classId: 'c-12-2',
    date: '2026-09-15',
    content: 'Thuyết trình dự án CSDL tự tin, slide trình bày chuyên nghiệp và ấn tượng.',
    skillCategory: 'Lý thuyết & Kỹ năng số',
    note: 'Đạt điểm tối đa phần thuyết trình'
  },
  {
    id: 'cm-04',
    studentId: 's-123-01',
    classId: 'c-12-3',
    date: '2026-09-16',
    content: 'Khả năng tư duy logic SQL rất sắc bén, giải được bài toán tối ưu truy vấn.',
    skillCategory: 'Lập trình & Thuật toán',
    note: 'Khuyến khích rèn luyện thêm'
  },
  {
    id: 'cm-05',
    studentId: 's-125-02',
    classId: 'c-12-5',
    date: '2026-09-17',
    content: 'Cần chú ý tập trung hơn trong phần lý thuyết và thực hiện cẩn thận các bài tập số.',
    skillCategory: 'Thái độ & Chuyên cần',
    note: 'Đã nhắc nhở và giao bài tập bổ trợ'
  }
];

export const initialActivityLogs: ActivityLog[] = [
  { id: 'act-01', timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(), type: 'grade', action: 'Đã cập nhật điểm thực hành lớp 12-1' },
  { id: 'act-02', timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), type: 'task', action: 'Đã giao nhiệm vụ mới: "Truy vấn SQL" cho lớp 12-3' },
  { id: 'act-03', timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(), type: 'lesson', action: 'Đã cập nhật trạng thái bài học CSDL lớp 12-2 sang "Đang dạy"' },
  { id: 'act-04', timestamp: new Date(Date.now() - 1000 * 60 * 360).toISOString(), type: 'comment', action: 'Đã thêm nhận xét rèn luyện kỹ năng cho học sinh lớp 12-1' },
  { id: 'act-05', timestamp: new Date(Date.now() - 1000 * 60 * 500).toISOString(), type: 'class', action: 'Đã thiết lập danh sách 4 lớp: 12-1, 12-2, 12-3, 12-5 môn Tin học THPT Nguyễn Dục' }
];

export const initialAppData: AppData = {
  classes: initialClasses,
  students: initialStudents,
  lessons: initialLessons,
  tasks: initialTasks,
  grades: initialGrades,
  comments: initialComments,
  activityLogs: initialActivityLogs,
  soundEnabled: false,
  teacherProfile: initialTeacherProfile
};
