'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const themes = [
    {
      id: 1,
      name: 'Dawn',
      category: 'مجاني',
      description: 'قالب عصري وسريع مع تصميم نظيف وأنيق',
      price: 'مجاني',
      features: ['تصميم متجاوب', 'سرعة عالية', 'سهل التخصيص', 'دعم متعدد اللغات'],
      colors: ['#000000', '#ffffff', '#f5f5f5'],
      preview: '#1a1a1a'
    },
    {
      id: 2,
      name: 'Prestige',
      category: 'مدفوع',
      description: 'قالب فاخر للمنتجات الراقية والعلامات التجارية الفاخرة',
      price: '$350',
      features: ['تصميم فاخر', 'معرض صور متقدم', 'رسوم متحركة سلسة', 'تخطيط مرن'],
      colors: ['#2c3e50', '#ecf0f1', '#bdc3c7'],
      preview: '#2c3e50'
    },
    {
      id: 3,
      name: 'Impulse',
      category: 'مدفوع',
      description: 'قالب ديناميكي مثالي لمتاجر الأزياء والملابس',
      price: '$300',
      features: ['شريط جانبي للمنتجات', 'بحث سريع', 'ميزات ترويجية', 'تصفية متقدمة'],
      colors: ['#e74c3c', '#34495e', '#ffffff'],
      preview: '#e74c3c'
    },
    {
      id: 4,
      name: 'Turbo',
      category: 'مدفوع',
      description: 'قالب سريع ومُحسّن للأداء العالي والمبيعات الكبيرة',
      price: '$320',
      features: ['أداء فائق', 'تحسين SEO', 'تحميل كسول', 'تكامل سهل'],
      colors: ['#3498db', '#2ecc71', '#f39c12'],
      preview: '#3498db'
    },
    {
      id: 5,
      name: 'Warehouse',
      category: 'مجاني',
      description: 'قالب مثالي للمتاجر ذات المخزون الكبير',
      price: 'مجاني',
      features: ['عرض شبكي', 'فلترة متقدمة', 'بحث قوي', 'قوائم ضخمة'],
      colors: ['#7f8c8d', '#95a5a6', '#ecf0f1'],
      preview: '#7f8c8d'
    },
    {
      id: 6,
      name: 'Empire',
      category: 'مدفوع',
      description: 'قالب احترافي للمتاجر متعددة المنتجات',
      price: '$300',
      features: ['قوائم ضخمة', 'عروض ترويجية', 'مدونة مدمجة', 'تصميم مرن'],
      colors: ['#16a085', '#27ae60', '#2c3e50'],
      preview: '#16a085'
    },
    {
      id: 7,
      name: 'Motion',
      category: 'مدفوع',
      description: 'قالب حديث مع رسوم متحركة جذابة',
      price: '$280',
      features: ['رسوم متحركة', 'فيديو خلفية', 'تأثيرات بصرية', 'تجربة غامرة'],
      colors: ['#9b59b6', '#8e44ad', '#ffffff'],
      preview: '#9b59b6'
    },
    {
      id: 8,
      name: 'Minimal',
      category: 'مجاني',
      description: 'تصميم بسيط وأنيق للمنتجات المتميزة',
      price: 'مجاني',
      features: ['بساطة', 'تركيز على المنتج', 'سهل الاستخدام', 'تصميم نظيف'],
      colors: ['#ecf0f1', '#bdc3c7', '#000000'],
      preview: '#ecf0f1'
    },
    {
      id: 9,
      name: 'Brooklyn',
      category: 'مجاني',
      description: 'قالب عملي ومتعدد الاستخدامات',
      price: 'مجاني',
      features: ['مرونة عالية', 'سهل التخصيص', 'متوافق مع الجوال', 'أداء جيد'],
      colors: ['#34495e', '#e67e22', '#ffffff'],
      preview: '#34495e'
    },
    {
      id: 10,
      name: 'Narrative',
      category: 'مجاني',
      description: 'قالب مثالي لرواية قصة علامتك التجارية',
      price: 'مجاني',
      features: ['تركيز على القصة', 'صور كبيرة', 'تصميم جذاب', 'سرد مرئي'],
      colors: ['#1abc9c', '#16a085', '#ecf0f1'],
      preview: '#1abc9c'
    },
    {
      id: 11,
      name: 'Symmetry',
      category: 'مدفوع',
      description: 'قالب متوازن للمتاجر العصرية',
      price: '$290',
      features: ['تصميم متماثل', 'عرض أنيق', 'تنقل سهل', 'واجهة حديثة'],
      colors: ['#e74c3c', '#c0392b', '#ffffff'],
      preview: '#e74c3c'
    },
    {
      id: 12,
      name: 'Streamline',
      category: 'مدفوع',
      description: 'قالب انسيابي لتجربة شراء سلسة',
      price: '$310',
      features: ['عملية شراء مبسطة', 'تنقل سريع', 'تصميم فعال', 'تحويل عالي'],
      colors: ['#f39c12', '#e67e22', '#2c3e50'],
      preview: '#f39c12'
    }
  ];

  const [filter, setFilter] = useState('الكل');
  const categories = ['الكل', 'مجاني', 'مدفوع'];

  const filteredThemes = filter === 'الكل'
    ? themes
    : themes.filter(theme => theme.category === filter);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '2.5rem',
            margin: '0 0 0.5rem 0',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}>
            قوالب متاجر شوبيفاي
          </h1>
          <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>
            اكتشف أفضل القوالب الاحترافية لمتجرك الإلكتروني
          </p>
        </div>
      </header>

      {/* Filter */}
      <div style={{
        maxWidth: '1400px',
        margin: '2rem auto',
        padding: '0 2rem',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              background: filter === cat
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'white',
              color: filter === cat ? 'white' : '#333',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: filter === cat
                ? '0 4px 15px rgba(102, 126, 234, 0.4)'
                : '0 2px 10px rgba(0,0,0,0.1)',
              transform: filter === cat ? 'translateY(-2px)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (filter !== cat) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== cat) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Themes Grid */}
      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {filteredThemes.map(theme => (
          <div
            key={theme.id}
            onClick={() => setSelectedTheme(theme)}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: selectedTheme?.id === theme.id ? 'scale(1.02)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = selectedTheme?.id === theme.id ? 'scale(1.02)' : 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            }}
          >
            {/* Preview */}
            <div style={{
              height: '200px',
              background: `linear-gradient(135deg, ${theme.preview} 0%, ${theme.colors[0]} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                gap: '10px'
              }}>
                {theme.colors.map((color, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: color,
                      border: '3px solid white',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                    }}
                  />
                ))}
              </div>
              <span style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: theme.category === 'مجاني' ? '#2ecc71' : '#e74c3c',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 'bold'
              }}>
                {theme.category}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2c3e50' }}>
                  {theme.name}
                </h2>
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#667eea'
                }}>
                  {theme.price}
                </span>
              </div>

              <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                {theme.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '1rem'
              }}>
                {theme.features.map((feature, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: '#f0f4ff',
                      color: '#667eea',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Modal */}
      {selectedTheme && (
        <div
          onClick={() => setSelectedTheme(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '20px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setSelectedTheme(null)}
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.5rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                zIndex: 10
              }}
            >
              ✕
            </button>

            <div style={{
              height: '250px',
              background: `linear-gradient(135deg, ${selectedTheme.preview} 0%, ${selectedTheme.colors[0]} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px 20px 0 0'
            }}>
              <h2 style={{ color: 'white', fontSize: '2.5rem', margin: 0 }}>
                {selectedTheme.name}
              </h2>
            </div>

            <div style={{ padding: '2rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <span style={{
                  background: selectedTheme.category === 'مجاني' ? '#2ecc71' : '#e74c3c',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontWeight: 'bold'
                }}>
                  {selectedTheme.category}
                </span>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#667eea'
                }}>
                  {selectedTheme.price}
                </span>
              </div>

              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                {selectedTheme.description}
              </p>

              <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>المميزات:</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {selectedTheme.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: '0.75rem',
                      background: '#f0f4ff',
                      marginBottom: '0.5rem',
                      borderRadius: '10px',
                      color: '#2c3e50'
                    }}
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>الألوان:</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {selectedTheme.colors.map((color, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '10px',
                        background: color,
                        border: '2px solid #ddd'
                      }} />
                      <span style={{ fontSize: '0.85rem', color: '#666' }}>
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        marginTop: '4rem',
        textAlign: 'center',
        color: '#666'
      }}>
        <p style={{ margin: 0 }}>
          جميع القوالب متوافقة مع منصة شوبيفاي
        </p>
      </footer>
    </div>
  );
}
