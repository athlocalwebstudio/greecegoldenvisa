"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  en: {
    nav: {
      program: {
        title: "The Program",
        dropdownTitle: "Greek Golden Visa Program",
        description:
          "Everything you need to understand before starting your residency journey in Greece.",
        button: "Explore the Program",
        cards: {
          benefits: {
            title: "Residency Benefits",
            description:
              "Discover the rights and advantages of becoming a Greek Golden Visa holder.",
          },
          requirements: {
            title: "Investment Requirements",
            description:
              "Learn the investment criteria and qualifying options available.",
          },
          eligibility: {
            title: "Your Eligibility",
            description:
              "Check whether you meet the requirements before applying.",
          },
          journey: {
            title: "Application Journey",
            description:
              "Follow every step from choosing your investment to receiving residency.",
          },
        },
      },

      investments: {
        title: "Investment Routes",
        dropdownTitle: "Investment Routes",
        description:
          "Choose the investment strategy that best matches your personal goals.",
        button: "Find Your Route",
        cards: {
          readyProperties: {
            title: "Ready-to-Move Properties",
            description:
              "Browse completed homes that already qualify for the program.",
          },
          strategic: {
            title: "Strategic Property Opportunities",
            description:
              "Explore renovation and redevelopment investment opportunities.",
          },
          alternative: {
            title: "Alternative Investments",
            description:
              "Discover investment options beyond traditional real estate.",
          },
          compare: {
            title: "Compare Your Options",
            description:
              "Compare every investment route side-by-side before deciding.",
          },
        },
      },

      greece: {
        title: "Why Greece",
        dropdownTitle: "Why Greece",
        description:
          "Discover why Greece continues to attract international investors from around the world.",
        button: "Discover Greece",
        cards: {
          lifestyle: {
            title: "Mediterranean Lifestyle",
            description:
              "Enjoy exceptional quality of life, climate and culture.",
          },
          europe: {
            title: "Gateway to Europe",
            description:
              "Visa-free access across the Schengen Area and Europe.",
          },
          property: {
            title: "Real Estate Potential",
            description:
              "Explore one of Europe's fastest-growing property markets.",
          },
          family: {
            title: "Family & Future",
            description:
              "Build long-term security for you and your family.",
          },
        },
      },

      guide: {
        title: "Investor Guide",
        dropdownTitle: "Investor Guide",
        description:
          "Useful tools and practical resources for every stage of your investment journey.",
        button: "Open Investor Guide",
        cards: {
          handbook: {
            title: "Investor Handbook",
            description:
              "Read our complete guide before making your investment.",
          },
          calculator: {
            title: "Investment Calculator",
            description:
              "Estimate costs and understand your investment budget.",
          },
          checklist: {
            title: "Application Checklist",
            description:
              "Track every document and requirement before applying.",
          },
          faq: {
            title: "Investor Questions",
            description:
              "Find answers to the most frequently asked questions.",
          },
        },
      },

      team: {
        title: "Our Team",
        dropdownTitle: "Meet Our Team",
        description:
          "Get to know the professionals guiding investors throughout the entire Golden Visa process.",
        button: "Meet the Team",
        cards: {
          whoWeAre: {
            title: "Who We Are",
            description:
              "Learn about our company and our mission.",
          },
          experience: {
            title: "Our Experience",
            description:
              "Discover our expertise in Greek real estate and residency.",
          },
          trust: {
            title: "Why Clients Trust Us",
            description:
              "See what makes investors choose our team.",
          },
          contact: {
            title: "Contact Our Advisors",
            description:
              "Speak directly with a Golden Visa specialist.",
          },
        },
      },

      common: {
        explore: "Explore",
        freeConsultation: "Free Consultation",
        openNavigation: "Open navigation menu",
        closeNavigation: "Close navigation menu",
        home: "Greece Golden Visa — Home",
        mobileNavigation: "Mobile navigation",
        languageEnglish: "English",
        languageRussian: "Russian",
        switchToEnglish: "Switch to English",
        switchToRussian: "Switch to Russian",
        specialistNote:
          "Speak directly with a Golden Visa specialist.",
      },
    },
  },

  ru: {
    nav: {
      program: {
        title: "Программа",
        dropdownTitle: "Программа Golden Visa в Греции",
        description:
          "Всё, что необходимо знать перед началом процесса получения ВНЖ в Греции.",
        button: "Изучить программу",
        cards: {
          benefits: {
            title: "Преимущества ВНЖ",
            description:
              "Узнайте о правах и преимуществах владельца греческой Golden Visa.",
          },
          requirements: {
            title: "Инвестиционные требования",
            description:
              "Узнайте об инвестиционных критериях и доступных вариантах.",
          },
          eligibility: {
            title: "Ваша возможность участия",
            description:
              "Проверьте, соответствуете ли вы требованиям перед подачей заявления.",
          },
          journey: {
            title: "Процесс оформления",
            description:
              "Пройдите все этапы — от выбора инвестиции до получения ВНЖ.",
          },
        },
      },

      investments: {
        title: "Инвестиционные направления",
        dropdownTitle: "Инвестиционные направления",
        description:
          "Выберите инвестиционную стратегию, которая лучше всего соответствует вашим целям.",
        button: "Выбрать направление",
        cards: {
          readyProperties: {
            title: "Готовая недвижимость",
            description:
              "Изучите готовые объекты, которые уже соответствуют требованиям программы.",
          },
          strategic: {
            title: "Стратегические объекты",
            description:
              "Изучите возможности инвестирования в реконструкцию и развитие недвижимости.",
          },
          alternative: {
            title: "Альтернативные инвестиции",
            description:
              "Откройте для себя инвестиционные возможности за пределами традиционной недвижимости.",
          },
          compare: {
            title: "Сравнить варианты",
            description:
              "Сравните все инвестиционные направления перед принятием решения.",
          },
        },
      },

      greece: {
        title: "Почему Греция",
        dropdownTitle: "Почему Греция",
        description:
          "Узнайте, почему Греция продолжает привлекать международных инвесторов со всего мира.",
        button: "Открыть Грецию",
        cards: {
          lifestyle: {
            title: "Средиземноморский образ жизни",
            description:
              "Наслаждайтесь высоким качеством жизни, климатом и культурой.",
          },
          europe: {
            title: "Ворота в Европу",
            description:
              "Безвизовый доступ к Шенгенской зоне и Европе.",
          },
          property: {
            title: "Потенциал недвижимости",
            description:
              "Откройте для себя один из наиболее динамично развивающихся рынков недвижимости Европы.",
          },
          family: {
            title: "Семья и будущее",
            description:
              "Создайте долгосрочную стабильность для себя и своей семьи.",
          },
        },
      },

      guide: {
        title: "Гид инвестора",
        dropdownTitle: "Гид инвестора",
        description:
          "Полезные инструменты и практические материалы на каждом этапе вашего инвестиционного пути.",
        button: "Открыть гид инвестора",
        cards: {
          handbook: {
            title: "Справочник инвестора",
            description:
              "Изучите наше полное руководство перед осуществлением инвестиции.",
          },
          calculator: {
            title: "Инвестиционный калькулятор",
            description:
              "Рассчитайте расходы и определите необходимый инвестиционный бюджет.",
          },
          checklist: {
            title: "Чек-лист заявления",
            description:
              "Отслеживайте все документы и требования перед подачей заявления.",
          },
          faq: {
            title: "Вопросы инвесторов",
            description:
              "Найдите ответы на наиболее часто задаваемые вопросы.",
          },
        },
      },

      team: {
        title: "Наша команда",
        dropdownTitle: "Наша команда",
        description:
          "Познакомьтесь со специалистами, которые сопровождают инвесторов на протяжении всего процесса Golden Visa.",
        button: "Познакомиться с командой",
        cards: {
          whoWeAre: {
            title: "Кто мы",
            description:
              "Узнайте о нашей компании и нашей миссии.",
          },
          experience: {
            title: "Наш опыт",
            description:
              "Узнайте о нашем опыте в сфере недвижимости и получения ВНЖ в Греции.",
          },
          trust: {
            title: "Почему нам доверяют клиенты",
            description:
              "Узнайте, почему инвесторы выбирают нашу команду.",
          },
          contact: {
            title: "Связаться с консультантами",
            description:
              "Поговорите напрямую со специалистом по Golden Visa.",
          },
        },
      },

      common: {
        explore: "Подробнее",
        freeConsultation: "Бесплатная консультация",
        openNavigation: "Открыть меню навигации",
        closeNavigation: "Закрыть меню навигации",
        home: "Greece Golden Visa — Главная",
        mobileNavigation: "Мобильная навигация",
        languageEnglish: "Английский",
        languageRussian: "Русский",
        switchToEnglish: "Переключить на английский",
        switchToRussian: "Переключить на русский",
        specialistNote:
          "Поговорите напрямую со специалистом по Golden Visa.",
      },
    },
  },
};

function getNestedValue(object, path) {
  return path.split(".").reduce((current, key) => {
    return current?.[key];
  }, object);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("site-language");

    if (savedLanguage === "en" || savedLanguage === "ru") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
  }, [language]);

  function toggleLanguage() {
    setLanguage((current) => (current === "en" ? "ru" : "en"));
  }

  function t(path) {
    const value = getNestedValue(translations[language], path);

    if (value !== undefined) {
      return value;
    }

    const englishValue = getNestedValue(
      translations.en,
      path
    );

    return englishValue ?? path;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}