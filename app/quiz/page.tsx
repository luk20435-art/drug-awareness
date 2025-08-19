"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BottomNavigation } from "@/components/bottom-navigation"
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Trophy, Clock, Target } from "lucide-react"
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
        <header className="bg-primary text-primary-foreground py-4 px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => (window.location.href = "/")}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">แบบทดสอบ</h1>
              <p className="text-primary-foreground/90 text-sm">ทดสอบความรู้เกี่ยวกับยาเสพติด</p>
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

        <BottomNavigation />
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const scoreLevel = getScoreLevel(score)
    const percentage = Math.round((score / quizQuestions.length) * 100)

    return (
      <div className="min-h-screen bg-background pb-20">
        <header className="bg-primary text-primary-foreground py-4 px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => (window.location.href = "/")}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">ผลการทดสอบ</h1>
              <p className="text-primary-foreground/90 text-sm">ผลคะแนนและคำอธิบาย</p>
            </div>
          </div>
        </header>

        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Score Summary */}
            <Card>
              <CardHeader className="text-center">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">คะแนนของคุณ</CardTitle>
                <div className="text-4xl font-bold text-primary mt-2">
                  {score}/{quizQuestions.length}
                </div>
                <div className="text-xl text-muted-foreground">({percentage}%)</div>
                <Badge className={`${scoreLevel.bg} ${scoreLevel.color} mt-3`}>{scoreLevel.level}</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{score}</div>
                    <div className="text-sm text-green-600">ถูก</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{quizQuestions.length - score}</div>
                    <div className="text-sm text-red-600">ผิด</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
                    <div className="text-sm text-blue-600">เปอร์เซ็นต์</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{formatTime(600 - timeLeft)}</div>
                    <div className="text-sm text-purple-600">เวลาที่ใช้</div>
                  </div>
                </div>
                <div className="flex gap-3 mt-6 justify-center">
                  <Button onClick={resetQuiz} variant="outline">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    ทำใหม่
                  </Button>
                  <Button onClick={() => (window.location.href = "/feedback")}>ประเมินความพึงพอใจ</Button>
                </div>
              </CardContent>
            </Card>

            {/* Answer Review */}
            <Card>
              <CardHeader>
                <CardTitle>รายละเอียดคำตอบ</CardTitle>
                <CardDescription>ตรวจสอบคำตอบและคำอธิบาย</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quizQuestions.map((question, index) => {
                  const userAnswer = selectedAnswers[index]
                  const isCorrect = userAnswer === question.correctAnswer
                  return (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">
                            {index + 1}. {question.question}
                          </h3>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground">คำตอบของคุณ:</span>
                              <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                                {userAnswer !== undefined ? question.options[userAnswer] : "ไม่ได้ตอบ"}
                              </span>
                            </div>
                            {!isCorrect && (
                              <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">คำตอบที่ถูก:</span>
                                <span className="text-green-600">{question.options[question.correctAnswer]}</span>
                              </div>
                            )}
                          </div>
                          <div className="mt-2 p-2 bg-muted rounded text-sm">
                            <strong>คำอธิบาย:</strong> {question.explanation}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </section>

        <BottomNavigation />
      </div>
    )
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100
  const question = quizQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-primary text-primary-foreground py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => (window.location.href = "/")}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">
                คำถามที่ {currentQuestion + 1} จาก {quizQuestions.length}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </header>

      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>ความคืบหน้า</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl leading-relaxed">{question.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswers[currentQuestion] === index ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto p-4"
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mr-3 flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </Button>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
              ก่อนหน้า
            </Button>
            <div className="flex gap-2">
              {currentQuestion === quizQuestions.length - 1 ? (
                <Button onClick={handleSubmitQuiz} disabled={selectedAnswers[currentQuestion] === undefined}>
                  ส่งคำตอบ
                </Button>
              ) : (
                <Button onClick={handleNextQuestion} disabled={selectedAnswers[currentQuestion] === undefined}>
                  ถัดไป
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <BottomNavigation />
    </div>
  )
}
