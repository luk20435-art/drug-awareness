"use client"
import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Home, Newspaper, User, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button"

const SubstanceScreeningApp = () => {
  const [currentStep, setCurrentStep] = useState('form');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '', 
    oasScore: 0,
    ov2Score: 0
  });
  const [result, setResult] = useState(null);

  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx-guW-ZJ917KOtFd-kLJqWsZD6hAkNR6-8grilNSUs4XjaESBySr7q49Xi9lG1HEGK0Q/exec';

  const calculateRisk = (oas, ov2) => {
    if (oas === 0 && ov2 < 26) return { level: 'ปกติ / ไม่มีความเสี่ยง', color: 'green', gradient: 'from-green-200 to-green-400', recommendations: ['เฝ้าระวังอย่างต่อเนื่อง','ติดตามตามรอบประเมิน'] };
    if (oas === 1) return { level: 'มีความเสี่ยงเล็กน้อย-ปานกลาง', color: 'yellow', gradient: 'from-yellow-200 to-yellow-400', recommendations: ['เข้าร่วมกิจกรรมป้องกัน','เยี่ยมติดตามโดย อสม.'] };
    if (oas === 2) return { level: 'มีความเสี่ยงสูง', color: 'orange', gradient: 'from-orange-200 to-orange-400', recommendations: ['เข้ารับการบำบัดในชุมชน (CTBx)','ทำกิจกรรมควบคุม 12 ครั้ง/ปี','ติดตามทุก 7 วัน'] };
    if (oas === 3) return { level: 'รุนแรง / ต้องส่งต่อทันที', color: 'red', gradient: 'from-red-200 to-red-400', recommendations: ['ส่งต่อ รพ./รพ.สต. ทันที','ประสานทีมสาธารณสุขและ อสม.'] };
    return null;
  };

  const saveToGoogleSheets = async (data) => {
    try {
      setIsLoading(true);
      const payload = {
        timestamp: new Date().toLocaleString('th-TH'),
        name: data.name,
        age: data.age, 
        oasScore: data.oasScore,
        ov2Score: data.ov2Score,
        riskLevel: data.risk.level,
        riskColor: data.risk.color,
        recommendations: data.risk.recommendations.join(', ')
      };
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors' 
      });
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    if (!formData.name || !formData.age) { alert('กรุณากรอกข้อมูลให้ครบถ้วน'); return; }
    const riskAssessment = calculateRisk(formData.oasScore, formData.ov2Score);
    const resultData = { ...formData, risk: riskAssessment, date: new Date().toLocaleDateString('th-TH'), time: new Date().toLocaleTimeString('th-TH') };
    setResult(resultData);
    await saveToGoogleSheets(resultData);
    setCurrentStep('result');
  };

  const resetForm = () => { setFormData({ name:'', age:'', oasScore:0, ov2Score:0 }); setResult(null); setCurrentStep('form'); };

  const getRiskIcon = (color) => {
    switch(color) {
      case 'green': return <CheckCircle className="w-12 h-12 text-green-700" />;
      case 'yellow': return <AlertTriangle className="w-12 h-12 text-yellow-700" />;
      case 'orange': return <AlertTriangle className="w-12 h-12 text-orange-700" />;
      case 'red': return <XCircle className="w-12 h-12 text-red-700" />;
      default: return <CheckCircle className="w-12 h-12 text-green-700" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
  {/* Header */}
  <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        
        <div className="relative py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 backdrop-blur-sm"
                onClick={() => (window.location.href = "/")}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-3"> 
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                    คัดกรองผู้เสพ/ผู้เสี่ยง
                  </h1>
                  <p className="text-white/90 text-lg">แบบฟอร์มการคัดกรอง</p>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </header>

  {/* Main Content */}
  <main className="flex-1 flex items-center justify-center p-4 mb-14">
    <div className="w-full max-w-md">
      {currentStep === 'form' && (
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
          <h1 className="text-3xl font-extrabold text-center text-indigo-700">คัดกรองผู้เสพ/ผู้เสี่ยง</h1>

          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">ชื่อ-นามสกุล</label>
              <input type="text" value={formData.name} onChange={e=>handleInputChange('name', e.target.value)} className="mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">อายุ</label>
              <input type="number" value={formData.age} onChange={e=>handleInputChange('age', e.target.value)} className="mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">คะแนน OAS</label>
              <select value={formData.oasScore} onChange={e=>handleInputChange('oasScore', parseInt(e.target.value))} className="mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option value={0}>0 - ไม่มีความเสี่ยง</option>
                <option value={1}>1 - ความเสี่ยงเล็กน้อย</option>
                <option value={2}>2 - ความเสี่ยงสูง</option>
                <option value={3}>3 - ความเสี่ยงรุนแรง</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">คะแนน OV2</label>
              <input type="number" value={formData.ov2Score} onChange={e=>handleInputChange('ov2Score', parseInt(e.target.value)||0)} className="mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
          </div>

          <button onClick={handleSubmit} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300">{isLoading?'กำลังบันทึก...':'ประเมินผลและบันทึก'}</button>
        </div>
      )}

      {currentStep === 'result' && result && (
        <div className={`rounded-3xl shadow-2xl p-8 space-y-6 bg-gradient-to-r ${result.risk.gradient}`}>
          <div className="flex items-center justify-center space-x-4">
            {getRiskIcon(result.risk.color)}
            <h2 className="text-2xl font-extrabold">{result.risk.level}</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-inner space-y-2">
            <p><strong>ชื่อ:</strong> {result.name}</p>
            <p><strong>อายุ:</strong> {result.age} ปี</p>
            <p><strong>คะแนน OAS:</strong> {result.oasScore}</p>
            <p><strong>คะแนน OV2:</strong> {result.ov2Score}</p>
            <p><strong>คำแนะนำ:</strong></p>
            <ul className="list-disc ml-5">
              {result.risk.recommendations.map((rec,i)=><li key={i}>{rec}</li>)}
            </ul>
          </div>

          <button onClick={resetForm} className="w-full bg-white font-bold py-3 rounded-xl shadow hover:bg-gray-200 transition duration-300">ประเมินใหม่</button>
        </div>
      )}
    </div>
  </main>

  {/* Footer */}
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

  );
};

export default SubstanceScreeningApp;
