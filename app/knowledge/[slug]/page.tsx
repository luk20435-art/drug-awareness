"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BottomNavigation } from "@/components/bottom-navigation"
import { ArrowLeft, Clock, User, Share2, Bookmark } from "lucide-react"
import { useParams } from "next/navigation"

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string

  // Mock article data - in real app, this would be fetched based on slug
  const article = {
    title: "ยาบ้า: อันตรายที่ซ่อนเร้น",
    category: "ประเภทของยาเสพติด",
    author: "ดร. สมชาย ใจดี",
    publishDate: "15 มกราคม 2567",
    readTime: "5 นาที",
    tags: ["ยาบ้า", "อันตราย", "ป้องกัน"],
    content: `
      <h2>ยาบ้าคืออะไร?</h2>
      <p>ยาบ้า หรือ เมทแอมเฟตามีน เป็นยาเสพติดประเภทสารกระตุ้นที่มีอันตรายสูง ส่งผลกระทบต่อระบบประสาทส่วนกลาง ทำให้ผู้ใช้รู้สึกตื่นตัว กระปรี้กระเปร่า และมีพลังงานมาก</p>
      
      <h2>ลักษณะของยาบ้า</h2>
      <p>ยาบ้ามักจะอยู่ในรูปแบบเม็ดยา มีสีต่างๆ เช่น สีส้ม สีชมพู สีเขียว หรือสีขาว บนเม็ดยามักจะมีตัวอักษรหรือสัญลักษณ์ต่างๆ เช่น WY, R, 99 เป็นต้น</p>
      
      <h2>ผลกระทบต่อร่างกาย</h2>
      <ul>
        <li>ทำให้หัวใจเต้นเร็ว ความดันโลหิตสูง</li>
        <li>ทำให้นอนไม่หลับ เบื่ออาหาร</li>
        <li>ทำให้ร่างกายผอมแห้ง ขาดน้ำ</li>
        <li>เสี่ยงต่อการเกิดโรคหัวใจ และหลอดเลือดสมอง</li>
      </ul>
      
      <h2>ผลกระทบต่อจิตใจ</h2>
      <ul>
        <li>ทำให้เกิดอาการหวาดระแวง</li>
        <li>เกิดภาพหลอน เสียงหลอน</li>
        <li>อารมณ์แปรปรวน ก้าวร้าว</li>
        <li>สมาธิสั้น ความจำเสื่อม</li>
      </ul>
      
      <h2>วิธีการป้องกัน</h2>
      <p>การป้องกันที่ดีที่สุดคือการหลีกเลี่ยงการใช้ยาเสพติดตั้งแต่แรก โดยการ:</p>
      <ul>
        <li>สร้างความรู้ความเข้าใจเกี่ยวกับอันตรายของยาเสพติด</li>
        <li>หาข้อมูลจากแหล่งที่น่าเชื่อถือ</li>
        <li>หลีกเลี่ยงสถานการณ์เสี่ยง</li>
        <li>มีกิจกรรมที่เป็นประโยชน์</li>
        <li>ขอความช่วยเหลือเมื่อจำเป็น</li>
      </ul>
      
      <h2>สรุป</h2>
      <p>ยาบ้าเป็นยาเสพติดที่อันตรายมาก ส่งผลกระทบต่อทั้งร่างกายและจิตใจ การป้องกันที่ดีที่สุดคือการไม่ใช้เลย หากมีปัญหาหรือต้องการความช่วยเหลือ ควรปรึกษาผู้เชี่ยวชาญหรือติดต่อสายด่วนช่วยเหลือ</p>
    `,
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => (window.location.href = "/knowledge")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2">
              {article.category}
            </Badge>
            <h1 className="text-xl font-bold leading-tight">{article.title}</h1>
          </div>
        </div>
      </header>

      {/* Article Meta */}
      <section className="py-4 px-4 border-b">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <span>{article.publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-1" />
                บันทึก
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-1" />
                แชร์
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">บทความที่เกี่ยวข้อง</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg border cursor-pointer hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">สัญญาณเตือนการติดยาเสพติด</h3>
              <p className="text-sm text-muted-foreground mb-3">รู้จักสัญญาณเตือนและวิธีการสังเกตการติดยาเสพติด</p>
              <Badge variant="outline" className="text-xs">
                ผลกระทบต่อจิตใจ
              </Badge>
            </div>
            <div className="bg-card p-4 rounded-lg border cursor-pointer hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">ผลกระทบต่อระบบประสาท</h3>
              <p className="text-sm text-muted-foreground mb-3">ยาเสพติดส่งผลกระทบต่อระบบประสาทอย่างไร</p>
              <Badge variant="outline" className="text-xs">
                ผลกระทบต่อร่างกาย
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
