import React, { useMemo, useState } from 'react';
import { User, Phone, MapPin, Send, Ticket, Lightbulb } from 'lucide-react';

const CommunityHub = () => {
  const [volunteer, setVolunteer] = useState({ name: '', phone: '', district: '' });
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);

  const [ticket, setTicket] = useState({ name: '', district: '', type: 'بنية تحتية', details: '' });
  const [ticketId, setTicketId] = useState(null);

  const [idea, setIdea] = useState({ name: '', focus: 'الإسكان', text: '' });
  const [ideaSuccess, setIdeaSuccess] = useState(false);

  const districts = useMemo(
    () => ['العربي', 'شرق', 'غرب', 'الضواحي', 'الزهور', 'جنوب', 'المناخ', 'بورفؤاد'],
    []
  );

  const ticketTypes = ['بنية تحتية', 'إشغالات/سلامة', 'خدمة عامة', 'فرص عمل', 'أخرى'];

  const handleVolunteer = (e) => {
    e.preventDefault();
    setVolunteerSuccess(true);
    setTimeout(() => setVolunteerSuccess(false), 4000);
    setVolunteer({ name: '', phone: '', district: '' });
  };

  const handleTicket = (e) => {
    e.preventDefault();
    const id = `PS-${Date.now().toString().slice(-6)}`;
    setTicketId(id);
    setTicket({ name: '', district: '', type: 'بنية تحتية', details: '' });
    setTimeout(() => setTicketId(null), 6000);
  };

  const handleIdea = (e) => {
    e.preventDefault();
    setIdeaSuccess(true);
    setTimeout(() => setIdeaSuccess(false), 4000);
    setIdea({ name: '', focus: 'الإسكان', text: '' });
  };

  return (
    <section id="community" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">ابن "العربي"... اللي شبهك</h2>
          <p className="text-center text-gray-600 mt-3 max-w-3xl mx-auto">
            نشأتي في "العربي" علمتني معنى الرجولة والجدعنة. عشت مشاكل الحي عن قرب: الحرائق المفاجئة، والإشغالات، والوحدات المتهالكة. خبرتي المهنية دعمتني بفهم القوانين وكيف نغيرها لصالح الناس.
          </p>
          <div className="mt-6 grid md:grid-cols-5 gap-3 text-sm text-gray-700">
            {['سكن كريم وآمن', 'وظائف نوعية للشباب', 'خدمات سريعة وشفافة', 'سلامة في الأحياء', 'تواصل دائم وميداني'].map((p) => (
              <span key={p} className="rounded-full bg-gray-100 px-4 py-2 text-center border border-gray-200">{p}</span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="text-xl font-bold mb-4">انضم للحملة</h3>
            <form onSubmit={handleVolunteer} className="space-y-3">
              <div className="flex items-center gap-2 bg-white rounded-lg border px-3 py-2">
                <User size={18} className="text-gray-500" />
                <input required value={volunteer.name} onChange={(e)=>setVolunteer(v=>({...v,name:e.target.value}))} placeholder="الاسم" className="w-full outline-none text-right" />
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg border px-3 py-2">
                <Phone size={18} className="text-gray-500" />
                <input required value={volunteer.phone} onChange={(e)=>setVolunteer(v=>({...v,phone:e.target.value}))} placeholder="الهاتف" className="w-full outline-none text-right" />
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg border px-3 py-2">
                <MapPin size={18} className="text-gray-500" />
                <select required value={volunteer.district} onChange={(e)=>setVolunteer(v=>({...v,district:e.target.value}))} className="w-full bg-transparent outline-none text-right">
                  <option value="" disabled>الحي</option>
                  {districts.map((d)=> (<option key={d} value={d}>{d}</option>))}
                </select>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-4 py-2 font-semibold transition">
                <Send size={18}/> تسجيل
              </button>
              {volunteerSuccess && (
                <p className="text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 text-sm text-center">تم استلام طلب انضمامك. سنعاود الاتصال قريبًا.</p>
              )}
            </form>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="text-xl font-bold mb-4">صوتك مسموع (تذكرة شكوى)</h3>
            <form onSubmit={handleTicket} className="space-y-3">
              <div className="flex items-center gap-2 bg-white rounded-lg border px-3 py-2">
                <User size={18} className="text-gray-500" />
                <input required value={ticket.name} onChange={(e)=>setTicket(v=>({...v,name:e.target.value}))} placeholder="الاسم" className="w-full outline-none text-right" />
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg border px-3 py-2">
                <MapPin size={18} className="text-gray-500" />
                <select required value={ticket.district} onChange={(e)=>setTicket(v=>({...v,district:e.target.value}))} className="w-full bg-transparent outline-none text-right">
                  <option value="" disabled>الحي</option>
                  {districts.map((d)=> (<option key={d} value={d}>{d}</option>))}
                </select>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg border px-3 py-2">
                <Ticket size={18} className="text-gray-500" />
                <select value={ticket.type} onChange={(e)=>setTicket(v=>({...v,type:e.target.value}))} className="w-full bg-transparent outline-none text-right">
                  {ticketTypes.map((t)=> (<option key={t} value={t}>{t}</option>))}
                </select>
              </div>
              <textarea required value={ticket.details} onChange={(e)=>setTicket(v=>({...v,details:e.target.value}))} placeholder="تفاصيل المشكلة" className="w-full bg-white rounded-lg border px-3 py-2 min-h-[96px] text-right" />
              <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 font-semibold transition">
                <Send size={18}/> إرسال تذكرة
              </button>
              {ticketId && (
                <p className="text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-2 text-sm text-center">
                  تم تسجيل تذكرتك بنجاح. رقم التذكرة: <span className="font-bold">{ticketId}</span>. نلتزم بالرد خلال ٤٨ ساعة.
                </p>
              )}
            </form>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="text-xl font-bold mb-4">شارك بفكرتك</h3>
            <form onSubmit={handleIdea} className="space-y-3">
              <div className="flex items-center gap-2 bg-white rounded-lg border px-3 py-2">
                <User size={18} className="text-gray-500" />
                <input required value={idea.name} onChange={(e)=>setIdea(v=>({...v,name:e.target.value}))} placeholder="اسمك" className="w-full outline-none text-right" />
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg border px-3 py-2">
                <Lightbulb size={18} className="text-gray-500" />
                <select value={idea.focus} onChange={(e)=>setIdea(v=>({...v,focus:e.target.value}))} className="w-full bg-transparent outline-none text-right">
                  <option>الإسكان</option>
                  <option>الوظائف</option>
                </select>
              </div>
              <textarea required value={idea.text} onChange={(e)=>setIdea(v=>({...v,text:e.target.value}))} placeholder="قدّم حلاً عمليًا موجزًا" className="w-full bg-white rounded-lg border px-3 py-2 min-h-[96px] text-right" />
              <button className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg px-4 py-2 font-semibold transition">
                <Send size={18}/> إرسال الفكرة
              </button>
              {ideaSuccess && (
                <p className="text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-sm text-center">شكراً لفكرتك. سيتم مراجعتها ضمن مبادرة الشباب.</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">المركز الإعلامي</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-4 bg-white">
              <h4 className="font-semibold mb-2">أخبار وفعاليات</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>جولة ميدانية في "العربي" لمتابعة ملف الإشغالات.</li>
                <li>ورشة تدريب للشباب على مهارات لوجستية بالميناء.</li>
                <li>لقاء جماهيري مفتوح للرد على الشكاوى الأسبوعية.</li>
              </ul>
            </div>
            <div className="rounded-xl border p-4 bg-white">
              <h4 className="font-semibold mb-2">مكتبة فيديوهات قصيرة</h4>
              <div className="grid grid-cols-2 gap-3">
                <video className="w-full rounded-lg" src="https://cdn.coverr.co/videos/coverr-cheering-crowd-3150/540p.mp4" muted loop playsInline autoPlay />
                <video className="w-full rounded-lg" src="https://cdn.coverr.co/videos/coverr-port-of-marseille-7832/540p.mp4" muted loop playsInline autoPlay />
                <video className="w-full rounded-lg" src="https://cdn.coverr.co/videos/coverr-standing-up-for-what-is-right-6400/540p.mp4" muted loop playsInline autoPlay />
                <video className="w-full rounded-lg" src="https://cdn.coverr.co/videos/coverr-container-terminal-5200/540p.mp4" muted loop playsInline autoPlay />
              </div>
            </div>
            <div className="rounded-xl border p-4 bg-white">
              <h4 className="font-semibold mb-2">مقالات رأي</h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="border-b pb-2"><span className="font-semibold">سياسة نظيفة ممكنة</span> — كيف نواجه المال السياسي بالتنظيم والشفافية.</li>
                <li className="border-b pb-2"><span className="font-semibold">تشريعات للسكن الكريم</span> — إطار عملي للإيجار الميسر.</li>
                <li><span className="font-semibold">الميناء التقني</span> — لماذا هو فرصة بورسعيد للوظائف النوعية.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHub;
