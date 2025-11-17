import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import MU from "../assets/company/MU.png"; // <-- Thêm dòng này

export const navLinks = [
  {
    id: "about",
    title: "Về tôi",
  },
  {
    id: "work",
    title: "Thành tựu",
  },
  {
    id: "contact",
    title: "Mời tôi cafe",
  },
];

const services = [
  {
    title: "Lập Trình Viên Web",
    icon: web,
  },
  {
    title: "Lập Trình Viên Game",
    icon: mobile,
  },

  {
    title: "Nhà sáng tạo nội dung",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Sinh viên Nguyễn Anh Tuấn",
    company_name: "CPHH nhiều thành viên",
    icon: MU,
    iconBg: "#4f60a0ff",
    date: "Tháng 8 2020- Tháng 3 2023",
    points: [
      "Chuyên copy code",
      "Chuyên sử dụng gemini và chatGPT",
      "Chưa có kinh nghiệm và chưa làm được gì",
    ],
  },
  
  
{
    title: "Full Stack Engineer", // <-- Đổi thành "Engineer" nghe oách hơn
    company_name: "Meta",
    icon: meta, // Giữ nguyên, vì bạn đã import 'meta' ở đầu tệp
    iconBg: "#E6DEDD",
    date: "Tháng 3 2023 - Hiện tại", // <-- Đổi ngày tháng một chút
    points: [
      "Phát triển và tối ưu hóa các thành phần React.js hiệu suất cao cho giao diện News Feed, phục vụ hàng triệu người dùng.",
      "Xây dựng và duy trì các API GraphQL bằng Node.js để cung cấp dữ liệu hiệu quả cho cả ứng dụng web và di động.",
      "Hợp tác với các nhà thiết kế UX/UI và Quản lý Sản phẩm (PM) để thực hiện các thử nghiệm A/B, giúp cải thiện 5% tỷ lệ tương tác của người dùng.",
      "Tham gia vào quy trình CI/CD và giám sát hệ thống để đảm bảo độ tin cậy 99.9% cho các dịch vụ cốt lõi.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Tuấn không chỉ code nhanh mà còn viết code rất sạch và dễ bảo trì. Khả năng giải quyết vấn đề phức tạp của anh ấy đã cứu dự án của chúng tôi nhiều lần.",
    name: "Trần Văn Hùng",
    designation: "Trưởng Nhóm Kỹ Thuật",
    company: "TechSolutions Co",
    image: "https://randomuser.me/api/portraits/men/4.jpg", // Ảnh ngẫu nhiên
  },
  {
    testimonial:
      "Tôi chưa từng làm việc với một lập trình viên nào có khả năng nắm bắt yêu cầu thiết kế nhanh như Tuấn. Anh ấy thực sự biến các bản thiết kế của tôi thành hiện thực.",
    name: "Lê Thị An",
    designation: "Trưởng Nhóm Thiết Kế UX/UI",
    company: "PixelPerfect Agency",
    image: "https://randomuser.me/api/portraits/women/5.jpg", // Ảnh ngẫu nhiên
  },
  {
    testimonial:
      "Sau khi Tuấn tối ưu hóa hệ thống API và cơ sở dữ liệu, thời gian phản hồi của ứng dụng chúng tôi đã giảm 30%. Kỹ năng full-stack của anh ấy thật đáng nể!",
    name: "Phạm Minh Đức",
    designation: "Giám đốc Sản phẩm (CPO)",
    company: "DataStream Corp",
    image: "https://randomuser.me/api/portraits/men/6.jpg", // Ảnh ngẫu nhiên
  },
];

const projects = [
  {
    name: "DevConnect - Mạng Xã Hội Lập Trình Viên",
    description:
     "Một nền tảng mạng xã hội MERN stack (MongoDB, Express, React, Node) cho phép lập trình viên tạo hồ sơ, viết bài blog, và tương tác. Tích hợp xác thực JWT và tải ảnh.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: MU,
    source_code_link: "https://github.com/tuandaynay04",
  },
  {
    name: "E-Shop Pro - Trang Thương Mại Điện Tử",
    description:
     "Ứng dụng web thương mại điện tử với Next.js, có giỏ hàng, thanh toán qua Stripe, và một trang quản trị (admin dashboard) để quản lý sản phẩm, đơn hàng và người dùng.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
