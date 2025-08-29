"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronRight, ArrowLeft, Home, User, Newspaper } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export const knowledgeItems = [
  {
    id: "meaning",
    title: "ความหมายของยาเสพติด",
    description: "อธิบายเกี่ยวกับยาเสพติด คืออะไร",
    icon: "🤷‍♂️",
    bgColor: "bg-gradient-to-br from-blue-400 to-cyan-400",
    category: "พื้นฐาน", 
    overview: "ยาเสพติด หมายถึงสารเคมีหรือสารธรรมชาติที่เมื่อเข้าสู่ร่างกายแล้วส่งผลต่อระบบประสาทส่วนกลาง",
    details: [
      { title: "นิยามตามกฎหมาย", content: "ตาม พ.ร.บ.ยาเสพติดให้โทษ...", icon: "📚" },
      { title: "ลักษณะเด่นของยาเสพติด", content: "เกิดความต้องการใช้อย่างต่อเนื่อง (Craving) ...", icon: "🔄" },
      { title: "ผลกระทบต่อร่างกาย", content: "ส่งผลต่อระบบหัวใจ, ระบบทางเดินหายใจ...", icon: "⚕️" },
      { title: "ผลกระทบต่อจิตใจ", content: "เปลี่ยนแปลงอารมณ์ การรับรู้ การตัดสินใจ...", icon: "🧠" },
    ],
  },
  {
    id: "types",
    title: "ประเภทของยาเสพติด",
    description: "อธิบายเกี่ยวกับประเภทต่างๆ",
    icon: "💊",
    bgColor: "bg-gradient-to-br from-red-400 to-orange-400",
    category: "ประเภท", 
    overview: "ยาเสพติดแบ่งออกเป็นหลายประเภทตามฤทธิ์และผลกระทบต่อระบบประสาท",
    details: [
      { title: "ยากดประสาท", content: "เฮโรอีน, มอร์ฟีน, แอลกอฮอล์", icon: "😴" },
      { title: "ยากระตุ้นประสาท", content: "ยาบ้า, โคเคน, แอมเฟตามีน", icon: "⚡" },
      { title: "ยาหลอนประสาท", content: "LSD, กัญชา, เห็ดเมา", icon: "🌈" },
      { title: "ยาเสพติดสังเคราะห์", content: "เอ็กซ์ตาซี, ไอซ์, เคตามีน", icon: "🧪" },
    ],
  },
  {
    id: "system",
    title: "รูปแบบของการเสพยาเสพติด",
    description: "วิธีที่ผู้เสพใช้ยาเสพติด",
    icon: "💉",
    bgColor: "bg-gradient-to-br from-purple-400 to-indigo-400",
    category: "ระบบ", 
    overview: "การเสพยาเสพติดมีหลายวิธี แต่ละวิธีมีความเสี่ยงและผลกระทบต่างกัน",
    details: [
      { title: "การสูดดม", content: "เข้าจมูกหรือปาก ยาจะเข้าสู่เลือดเร็ว", icon: "👃" },
      { title: "การฉีด", content: "ฉีดเข้าหลอดเลือดโดยตรง เสี่ยงติดเชื้อ", icon: "💉" },
      { title: "การกิน", content: "ยาถูกดูดซึมผ่านทางเดินอาหาร", icon: "👄" },
      { title: "การสูบ", content: "สูดควันเข้าปอดอย่างรวดเร็ว", icon: "🚬" },
    ],
  },
  {
    id: "effects",
    title: "ผลกระทบ",
    description: "ผลกระทบต่อร่างกายและจิตใจ",
    icon: "🧠",
    bgColor: "bg-gradient-to-br from-pink-400 to-rose-400",
    category: "ผลกระทบ", 
    overview: "ยาเสพติดส่งผลกระทบทั้งระยะสั้นและยาว อาจถึงชีวิตได้",
    details: [
      { title: "สมองและระบบประสาท", content: "ทำลายเซลล์สมอง, ส่งผลต่อความจำ", icon: "🧠" },
      { title: "หัวใจและหลอดเลือด", content: "เพิ่มความดัน, อัตราการเต้นผิดปกติ", icon: "❤️" },
      { title: "ระบบทางเดินหายใจ", content: "ปอดอักเสบ, หยุดหายใจ", icon: "🫁" },
      { title: "สุขภาพจิต", content: "ซึมเศร้า, วิตกกังวล, โรคจิต", icon: "😵" },
    ],
  },
  {
    id: "food",
    title: "อาการของผู้เสพ/ติดยา",
    description: "ลักษณะอาการของผู้เสพยาเสพติด",
    icon: "🍎",
    bgColor: "bg-gradient-to-br from-green-400 to-emerald-400",
    category: "สุขภาพ", 
    overview: "ผู้เสพมักมีปัญหาโภชนาการ เนื่องจากยามีผลต่อความอยากอาหาร",
    details: [
      { title: "การเปลี่ยนแปลงความอยากอาหาร", content: "บางคนหิวจัด บางคนเบื่ออาหาร", icon: "🍽️" },
      { title: "ขาดวิตามินและแร่ธาตุ", content: "เช่น B, C, D, เหล็ก, แคลเซียม", icon: "💊" },
      { title: "ปัญหาระบบย่อยอาหาร", content: "กรดไหลย้อน, ท้องเสีย, ท้องผูก", icon: "🤢" },
      { title: "คำแนะนำด้านอาหาร", content: "เน้นอาหารที่มีประโยชน์, ดื่มน้ำเพียงพอ", icon: "👨‍⚕️" },
    ],
  },
  {
    id: "law",
    title: "กฎหมายยาเสพติดไทย",
    description: "กฎเกณฑ์ที่เกี่ยวกับยาเสพติด",
    icon: "⚖️",
    bgColor: "bg-gradient-to-br from-amber-400 to-yellow-400",
    category: "กฎหมาย", 
    overview: "ไทยมีกฎหมายแบ่งยาเสพติด 5 ประเภท ตามความร้ายแรง",
    details: [
      { title: "ประเภท 1", content: "เฮโรอีน, จำคุก 1-10 ปี, ปรับ 20,000-200,000 บาท", icon: "🔴" },
      { title: "ประเภท 2", content: "โคเคน, มอร์ฟีน, โทษจำคุก 6 เดือน-5 ปี", icon: "🟠" },
      { title: "ประเภท 3", content: "ยาบ้า, ไอซ์, จำคุก 1-5 ปี", icon: "🟡" },
      { title: "ประเภท 4-5", content: "ใช้ในทางการแพทย์ แต่โทษขึ้นอยู่กับปริมาณ", icon: "🔵" },
    ],
  },
  {
    id: "treatment",
    title: "การบำบัดรักษา",
    description: "แนวทางการรักษาผู้ติดยาเสพติด",
    icon: "🏥",
    bgColor: "bg-gradient-to-br from-teal-400 to-cyan-400",
    category: "การรักษา", 
    overview: "การบำบัดต้องใช้หลายด้าน ทั้งกาย, จิต, สังคม และครอบครัว",
    details: [
      { title: "การบำบัดด้วยยา", content: "ใช้ยาทดแทนและลดอาการถอนภายใต้แพทย์", icon: "💊" },
      { title: "การบำบัดทางจิตใจ", content: "คำปรึกษา, การบำบัดพฤติกรรม", icon: "🗣️" },
      { title: "ฟื้นฟูสมรรถภาพ", content: "ฝึกทักษะชีวิต, การศึกษา, การฝึกอาชีพ", icon: "🎯" },
      { title: "สนับสนุนจากครอบครัว", content: "ความรัก, ความเข้าใจ, การยอมรับ", icon: "👨‍👩‍👧‍👦" },
    ],
  },
]

export default function KnowledgePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = knowledgeItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4 relative z-10">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              คลังความรู้
            </h1>
            <p className="text-blue-100 text-sm mt-1">ความรู้และข้อมูลเกี่ยวกับยาเสพติด</p>
          </div>
        </div>
      </header>

      {/* Search */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="ค้นหาความรู้..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Cards */}
      <section className="py-8 px-4 max-w-4xl mx-auto space-y-4">
        {filteredItems.map((item) => (
          <Link key={item.id} href={`/knowledge/${item.id}`}>
            <Card className="hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="flex items-center gap-6">
                <div className={`w-20 h-20 rounded-2xl ${item.bgColor} flex items-center justify-center`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3> 
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <Badge variant="outline" className="text-xs bg-white border-gray-200">{item.category}</Badge>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t px-2 py-2 shadow-md">
              <div className="flex justify-between max-w-md mx-auto">
                {[
                  { icon: Home, label: 'หน้าหลัก', active: true, href: '/' },
                  { icon: Newspaper, label: 'ข่าวสาร', href: '/new' }, 
                  { icon: User, label: 'โปรไฟล์', href: '/profile' }, 
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={index}
                      className={`flex flex-col items-center text-xs ${item.active ? 'text-purple-600' : 'text-gray-500'}`}
                      onClick={() => {
                        if(item.label === 'ออกจากระบบ') {
                          localStorage.removeItem("isLoggedIn");
                          window.location.href = item.href;
                        } else {
                          window.location.href = item.href;
                        }
                      }}
                    >
                      <IconComponent className="w-6 h-6 mb-1" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
    </div>
  )
}
