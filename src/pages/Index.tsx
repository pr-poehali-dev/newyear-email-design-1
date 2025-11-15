import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const wishes = [
    {
      icon: 'Star',
      title: 'Счастья',
      text: 'Пусть новый год принесёт в вашу жизнь радость, тепло и искренние улыбки'
    },
    {
      icon: 'Heart',
      title: 'Здоровья',
      text: 'Крепкого здоровья вам и вашим близким на весь предстоящий год'
    },
    {
      icon: 'Sparkles',
      title: 'Успеха',
      text: 'Пусть все мечты сбываются, а каждый день приносит новые возможности'
    },
    {
      icon: 'Gift',
      title: 'Благополучия',
      text: 'Пусть в вашем доме всегда царят уют, достаток и взаимопонимание'
    }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/7fdfeb24-8ac2-4c23-9a81-2becb357823c/files/33404bbe-cb80-4640-9622-7a026ce86cc3.jpg',
      alt: 'Зимний вечер'
    },
    {
      url: 'https://cdn.poehali.dev/projects/7fdfeb24-8ac2-4c23-9a81-2becb357823c/files/3b593620-9990-4db5-afd6-62464a939c28.jpg',
      alt: 'Праздничное настроение'
    },
    {
      url: 'https://cdn.poehali.dev/projects/7fdfeb24-8ac2-4c23-9a81-2becb357823c/files/eb667917-8717-406a-aec2-bdbfdc8d0731.jpg',
      alt: 'Новогоднее волшебство'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        <section className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <Icon name="Snowflake" className="text-accent" size={48} />
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-primary mb-6 tracking-tight">
            С Новым Годом!
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Пусть этот праздник наполнит ваш дом теплом, светом и радостью. 
            Желаем вам волшебства в каждом дне наступающего года!
          </p>
        </section>

        <section className="mb-20 animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <h2 className="font-heading text-3xl font-semibold text-primary mb-10 text-center">
            Наши пожелания
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {wishes.map((wish, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40 bg-white/50 backdrop-blur-sm animate-fade-in"
                style={{ 
                  animationDelay: `${0.3 + index * 0.1}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name={wish.icon} className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                      {wish.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {wish.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-slide-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
          <h2 className="font-heading text-3xl font-semibold text-primary mb-10 text-center">
            Праздничные моменты
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <Icon name="X" size={32} />
              </button>
              <img
                src={gallery[selectedImage].url}
                alt={gallery[selectedImage].alt}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}

        <footer className="mt-20 pt-10 border-t border-accent/20 text-center">
          <p className="text-muted-foreground font-light">
            С наилучшими пожеланиями ✨
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
