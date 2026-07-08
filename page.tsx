import Link from "next/link";
import { Download, FileCode, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "تحميل مشروع Paradise Soap",
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-amber-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg text-4xl">
              📦
            </div>
            <h1 className="heading-2 text-gray-900 mb-3">تحميل مشروع Paradise Soap</h1>
            <p className="text-gray-600">
              احصل على كامل ملفات المشروع لرفعه على استضافتك الخاصة أو تعديله
            </p>
          </div>

          {/* Download Button */}
          <a
            href="/paradise-soap.zip"
            download="paradise-soap.zip"
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-5 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 text-lg mb-6"
          >
            <Download className="w-6 h-6" />
            تحميل المشروع كاملاً (ZIP)
          </a>

          {/* What's Inside */}
          <div className="bg-amber-50 rounded-xl p-6 mb-6 border border-amber-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileCode className="w-5 h-5 text-amber-600" />
              محتويات الملف المضغوط:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <b>src/</b> - كامل كود المصدر (الصفحات، المكونات، قاعدة البيانات)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <b>public/</b> - الملفات العامة (manifest, favicon)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <b>package.json</b> - قائمة المكتبات والاعتماديات
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <b>tsconfig.json, tailwind.config.ts</b> - ملفات الإعدادات
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>
                  <b>.env</b> - إعدادات قاعدة البيانات (يجب تعديلها لاحقاً)
                </span>
              </li>
            </ul>
          </div>

          {/* How to Use */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">
              📖 كيف تستخدم الملف بعد التحميل؟
            </h3>

            {/* Step 1 */}
            <div className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-bold text-gray-900">فك ضغط الملف</p>
                <p className="text-sm text-gray-600 mt-1">
                  استخدم WinRAR أو 7-Zip على الكمبيوتر لفك ضغط الملف.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-bold text-gray-900">ثبّت Node.js على الكمبيوتر</p>
                <p className="text-sm text-gray-600 mt-1">
                  حمّل Node.js من <span className="text-purple-700 font-mono">nodejs.org</span> ثم افتح المشروع في مجلد وشغّل الأمر:
                </p>
                <code className="block mt-2 p-2 bg-gray-900 text-green-400 rounded text-xs font-mono">
                  npm install
                </code>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-bold text-gray-900">ارفعه على Vercel أو GitHub</p>
                <p className="text-sm text-gray-600 mt-1">
                  ارفع الملفات على مستودع <b>GitHub</b> جديد، ثم اربطه بحسابك في <b>Vercel</b> لينشر الموقع مجاناً!
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100">
              <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <p className="font-bold text-gray-900">اربط قاعدة بيانات PostgreSQL</p>
                <p className="text-sm text-gray-600 mt-1">
                  ستحتاج قاعدة بيانات مجانية من <b>Neon.tech</b> أو <b>Supabase</b>، وضع رابطها في ملف <span className="font-mono bg-gray-100 px-1 rounded">.env</span> باسم <span className="font-mono bg-gray-100 px-1 rounded">DATABASE_URL</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-xl">
            <p className="text-sm text-yellow-900">
              <b>⚠️ ملاحظة مهمة:</b> ملف <span className="font-mono bg-yellow-100 px-1 rounded">.env</span> الحالي يحتوي على رابط قاعدة بيانات داخلية للتجربة فقط. عند النشر، ضع فيه رابط قاعدة بياناتك الحقيقية.
            </p>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <Link href="/">
              <button className="text-amber-600 hover:text-amber-700 font-medium">
                ← العودة للمتجر
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
