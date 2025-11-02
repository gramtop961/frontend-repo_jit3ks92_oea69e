import React from 'react';
import { Building2, Briefcase } from 'lucide-react';

const YouthAgenda = () => {
  return (
    <section id="youth-agenda" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center">أجندة الشباب</h2>
        <p className="text-center text-gray-600 mb-10">نركز على قضيتين: السكن الكريم والوظائف النوعية.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700"><Building2 size={22} /></div>
              <h3 className="text-xl font-bold">أزمة الإسكان: حلول تشريعية لا عرض مشاكل</h3>
            </div>
            <ul className="list-disc pr-6 space-y-2 text-gray-700 leading-relaxed">
              <li>مقترح قانون للإيجار الميسر للشباب مع حوافز ضريبية للمالك الملتزم.</li>
              <li>تفعيل نظام نقاط للاستحقاق يراعي الحالة الاجتماعية والدخل والفترة المقيمة في الحي.</li>
              <li>إتاحة البناء الرأسي المنضبط في أحياء مثل "العربي" مع اشتراطات سلامة صارمة لمواجهة مخاطر الحرائق والإشغالات.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700"><Briefcase size={22} /></div>
              <h3 className="text-xl font-bold">الوظائف: مبادرة "بورسعيد الميناء التقني"</h3>
            </div>
            <ul className="list-disc pr-6 space-y-2 text-gray-700 leading-relaxed">
              <li>شراكات مع شركات الموانئ والخدمات اللوجستية لتدريب منتهٍ بالتوظيف.</li>
              <li>حاضنة أعمال للخدمات الرقمية المرتبطة بالميناء (تتبع، توثيق، فواتير إلكترونية).</li>
              <li>مركز مهارات تقنية: ذكاء صناعي تطبيقي، أمن سيبراني لوجستي، وأتمتة المخازن.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouthAgenda;
