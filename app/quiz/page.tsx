"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BottomNavigation } from "@/components/bottom-navigation"
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Trophy, Clock, Target, Home, Search, Heart, User, Play, Newspaper } from "lucide-react"
import { useState, useEffect } from "react"

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes
  const [quizStarted, setQuizStarted] = useState(false)

  const quizQuestions = [
    {
      id: 1,
      question: "ยาเสพติดประเภทใดที่มีผลกระทบต่อระบบประสาทส่วนกลางมากที่สุด?",
      options: ["กัญชา", "ยาบ้า", "เฮโรอีน", "แอลกอฮอล์"],
      correctAnswer: 1,
      explanation: "ยาบ้า (เมทแอมเฟตามีน) เป็นสารกระตุ้นที่ส่งผลกระทบต่อระบบประสาทส่วนกลางอย่างรุนแรง",
    },
    {
      id: 2,
      question: "อาการใดต่อไปนี้ไม่ใช่สัญญาณเตือนการติดยาเสพติด?",
      options: ["นอนหลับมากกว่าปกติ", "อารมณ์แปรปรวน", "เบื่ออาหาร", "ออกกำลังกายสม่ำเสมอ"],
      correctAnswer: 3,
      explanation: "การออกกำลังกายสม่ำเสมอเป็นพฤติกรรมที่ดีต่อสุขภาพ ไม่ใช่สัญญาณการติดยาเสพติด",
    },
    {
      id: 3,
      question: "วิธีการปฏิเสธที่เหมาะสมที่สุดเมื่อมีคนชักชวนให้ใช้ยาเสพติดคือ?",
      options: ["พูดว่า 'ไว้คราวหน้า'", "พูดว่า 'ไม่' อย่างชัดเจนและมั่นใจ", "เงียบไม่ตอบ", "หาข้อแก้ตัวที่ไม่จริง"],
      correctAnswer: 1,
      explanation: "การปฏิเสธอย่างชัดเจนและมั่นใจเป็นวิธีที่ดีที่สุดในการแสดงจุดยืนของตนเอง",
    },
    {
      id: 4,
      question: "สายด่วนป้องกันยาเสพติดของประเทศไทยคือหมายเลขใด?",
      options: ["1165", "1669", "191", "1300"],
      correctAnswer: 0,
      explanation: "สายด่วน 1165 เป็นหมายเลขสำหรับการป้องกันยาเสพติดที่ให้บริการ 24 ชั่วโมง",
    },
    {
      id: 5,
      question: "ปัจจัยใดที่ไม่ใช่สาเหตุของการเริ่มใช้ยาเสพติด?",
      options: ["ความอยากรู้อยากลอง", "ความเครียด", "การมีกิจกรรมที่สร้างสรรค์", "อิทธิพลจากเพื่อน"],
      correctAnswer: 2,
      explanation: "การมีกิจกรรมที่สร้างสรรค์เป็นปัจจัยป้องกัน ไม่ใช่สาเหตุของการใช้ยาเสพติด",
    },
    {
      id: 6,
      question: "ระยะเวลาการฟื้นฟูจากการติดยาเสพติดโดยทั่วไปใช้เวลาประมาณ?",
      options: ["1-2 สัปดาห์", "1-2 เดือน", "3-12 เดือนหรือมากกว่า", "1-2 ปี"],
      correctAnswer: 2,
      explanation: "การฟื้นฟูจากยาเสพติดเป็นกระบวนการที่ใช้เวลานาน โดยทั่วไป 3-12 เดือนหรือมากกว่า",
    },
    {
      id: 7,
      question: "การป้องกันยาเสพติดที่มีประสิทธิภาพที่สุดคือ?",
      options: ["การลงโทษที่รุนแรง", "การให้ความรู้และสร้างทักษะชีวิต", "การหลีกเลี่ยงการพูดถึงเรื่องยาเสพติด", "การควบคุมอย่างเข้มงวด"],
      correctAnswer: 1,
      explanation: "การให้ความรู้และสร้างทักษะชีวิตเป็นวิธีการป้องกันที่ยั่งยืนและมีประสิทธิภาพ",
    },
    {
      id: 8,
      question: "ผลกระทบระยะยาวของการใช้ยาเสพติดต่อสมองคือ?",
      options: ["ความจำดีขึ้น", "สมาธิเพิ่มขึ้น", "ความจำเสื่อมและสมาธิสั้น", "การเรียนรู้เร็วขึ้น"],
      correctAnswer: 2,
      explanation: "ยาเสพติดทำลายเซลล์สมองและส่งผลให้เกิดความจำเสื่อมและสมาธิสั้น",
    },
    {
      id: 9,
      question: "บทบาทของครอบครัวในการป้องกันยาเสพติดที่สำคัญที่สุดคือ?",
      options: ["การควบคุมอย่างเข้มงวด", "การสร้างสัมพันธภาพที่ดีและการสื่อสาร", "การหลีกเลี่ยงการพูดถึงเรื่องยาเสพติด", "การใช้ความรุนแรง"],
      correctAnswer: 1,
      explanation: "สัมพันธภาพที่ดีและการสื่อสารที่เปิดเผยในครอบครัวเป็นรากฐานสำคัญของการป้องกัน",
    },
    {
      id: 10,
      question: "เมื่อพบว่าคนใกล้ตัวใช้ยาเสพติด ควรทำอย่างไรเป็นอันดับแรก?",
      options: ["ตำหนิและด่าทอ", "เพิกเฉยไม่สนใจ", "ให้กำลังใจและหาความช่วยเหลือจากผู้เชี่ยวชาญ", "บังคับให้เลิกทันที"],
      correctAnswer: 2,
      explanation: "การให้กำลังใจและการขอความช่วยเหลือจากผู้เชี่ยวชาญเป็นวิธีที่เหมาะสมและมีประสิทธิภาพ",
    },
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (quizStarted && !showResults && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    } else if (timeLeft === 0 && !showResults) {
      handleSubmitQuiz()
    }
    return () => clearTimeout(timer)
  }, [quizStarted, showResults, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitQuiz = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const getScoreLevel = (score: number) => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 80) return { level: "ดีเยี่ยม", color: "text-green-600", bg: "bg-green-100" }
    if (percentage >= 60) return { level: "ดี", color: "text-blue-600", bg: "bg-blue-100" }
    if (percentage >= 40) return { level: "พอใช้", color: "text-yellow-600", bg: "bg-yellow-100" }
    return { level: "ควรปรับปรุง", color: "text-red-600", bg: "bg-red-100" }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setTimeLeft(600)
    setQuizStarted(false)
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-6 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-700/20 animate-pulse"></div>
        <div className="max-w-4xl mx-auto flex items-center gap-4 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
            onClick={() => (window.location.href = "/")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
              แบบทดสอบความรู้
            </h1>
            <p className="text-blue-100 text-sm mt-1 flex items-center gap-2">
              <Play className="w-4 h-4" />
              ทดสอบความรู้เกี่ยวกับการป้องกันยาเสพติด
            </p>
          </div>
        </div>
      </header>

        <section className="py-8 px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">แบบทดสอบความรู้</CardTitle>
                <CardDescription>ทดสอบความรู้เกี่ยวกับการป้องกันยาเสพติด</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-muted p-4 rounded-lg">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{quizQuestions.length} คำถาม</div>
                    <div className="text-sm text-muted-foreground">ครอบคลุมทุกหัวข้อ</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">10 นาที</div>
                    <div className="text-sm text-muted-foreground">เวลาในการทำ</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">80% ผ่าน</div>
                    <div className="text-sm text-muted-foreground">เกณฑ์การผ่าน</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">คำแนะนำ:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• อ่านคำถามให้ละเอียดก่อนตอบ</li>
                    <li>• สามารถย้อนกลับไปแก้ไขคำตอบได้</li>
                    <li>• หากเวลาหมด ระบบจะส่งคำตอบอัตโนมัติ</li>
                    <li>• ผลการทดสอบจะแสดงทันทีหลังจากเสร็จสิ้น</li>
                  </ul>
                </div>

                <Button className="w-full" size="lg" onClick={() => setQuizStarted(true)}>
                  เริ่มทำแบบทดสอบ
                </Button>
              </CardContent>
            </Card>
          </div>
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
}
