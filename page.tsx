import Link from "next/link";
import { Heart, Leaf, Award, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "الجودة",
      description: "نقدم منتجات بأعلى معايير الجودة",
    },
    {
      icon: Leaf,
      title: "الطبيعية",
      description: "منتجاتنا آمنة وصديقة للبيئة",
    },
    {
      icon: Award,
      title: "الابتكار",
      description: "نتطور باستمرار لخدمة أفضل",
    },
    {
      icon: Users,
      title: "الخدمة",
      description: "عملاؤنا هم أولويتنا الأولى",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-2 text-white mb-4">عن Paradise Soap - صابون برادايس</h1>
          <p className="text-amber-100 text-lg">
            رحلتنا في تقديم أفضل منتجات العناية والتنظيف
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="heading-3 text-gray-900 mb-4">قصتنا</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Paradise Soap - صابون برادايس هي شركة سودانية متخصصة في توفير أفضل أنواع الصابون والمنظفات بجودة عالية وأسعار مناسبة لكل فئات المجتمع. نبدأ رحلتنا برؤية واضحة: توفير منتجات آمنة وفعالة لكل بيت سوداني.
            </p>
            <p className="text-gray-700 leading-relaxed">
              مع سنوات من الخبرة والتفاني في العمل، استطعنا بناء سمعة قوية وكسب ثقة آلاف العملاء الذين يعتمدون على منتجاتنا يومياً.
            </p>
          </div>
          <div className="h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center text-8xl">
            🧼
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="heading-3 text-gray-900 mb-12 text-center">قيمنا الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-12 mb-16">
          <h2 className="heading-3 text-gray-900 mb-12 text-center">إنجازاتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-amber-600 mb-2">500+</p>
              <p className="text-gray-700">منتج متنوع</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-600 mb-2">10K+</p>
              <p className="text-gray-700">عميل راضي</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-600 mb-2">5</p>
              <p className="text-gray-700">سنوات خبرة</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-600 mb-2">100%</p>
              <p className="text-gray-700">جودة مضمونة</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="heading-3 text-gray-900 mb-4">هل أنت مستعد للتسوق معنا؟</h2>
          <p className="text-gray-600 mb-8">
            اكتشف مجموعتنا الكاملة من المنتجات المميزة من Paradise Soap - صابون برادايس
          </p>
          <Link href="/products">
            <button className="btn-primary">تصفح منتجاتنا</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
