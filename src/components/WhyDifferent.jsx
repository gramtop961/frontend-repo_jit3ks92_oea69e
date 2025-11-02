import React from 'react';

const WhyDifferent = () => {
  return (
    <section id="why-different" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
          بورسعيد تستحق الأفضل: سياسة نظيفة ونائب في خدمتك
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          نقف ضد المال السياسي وضد النائب الغائب. تعهدنا واضح: شفافية في التمويل، حضور دائم بين الناس، وأولوية حقيقية لملف الشباب.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="text-gray-500 font-semibold text-sm md:text-base p-3 text-left">المجال</th>
                <th className="text-gray-900 font-bold text-sm md:text-base p-3 bg-gray-50 rounded-l-lg">الممارسة السائدة</th>
                <th className="text-gray-900 font-bold text-sm md:text-base p-3 bg-emerald-50 rounded-r-lg">ميثاقنا</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-top p-3 text-gray-700 font-semibold">التمويل</td>
                <td className="align-top p-3 bg-gray-50 rounded-l-lg text-gray-700">
                  غموض في مصادر الإنفاق وشراء ولاءات تحت شعار "خدمة".
                </td>
                <td className="align-top p-3 bg-emerald-50 rounded-r-lg text-emerald-900">
                  إعلان دوري للموازنة، دعم شعبي شفاف، ورفض قاطع لأي مال سياسي.
                </td>
              </tr>
              <tr>
                <td className="align-top p-3 text-gray-700 font-semibold">التواصل</td>
                <td className="align-top p-3 bg-gray-50 rounded-l-lg text-gray-700">
                  حضور موسمي قبل الانتخابات، ومكاتب مغلقة بعد الفوز.
                </td>
                <td className="align-top p-3 bg-emerald-50 rounded-r-lg text-emerald-900">
                  جولات ميدانية أسبوعية، رقم تواصل معلن، ونظام تذاكر للشكاوى خلال ٤٨ ساعة.
                </td>
              </tr>
              <tr>
                <td className="align-top p-3 text-gray-700 font-semibold">ملف الشباب</td>
                <td className="align-top p-3 bg-gray-50 rounded-l-lg text-gray-700">
                  شعارات فضفاضة ووعود غير قابلة للقياس.
                </td>
                <td className="align-top p-3 bg-emerald-50 rounded-r-lg text-emerald-900">
                  تشريعات للسكن الميسر، ومبادرة "بورسعيد الميناء التقني" لوظائف نوعية مرتبطة بالميناء.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
