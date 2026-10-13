export const services = [
  // Obstetrics
  {
    id: "obstetrics",
    title: "Obstetrics",
    slug: "obstetrics",

    nav: {
      title: "Obstetrics",
      description: "Pregnancy, Maternity & Delivery Care",
    },

    card: {
      title: "Pregnancy & Maternity Care",
      description:
        "Comprehensive care for mother and baby throughout pregnancy, delivery and the postpartum period.",
      image: "/images/services/obstetrics/card.jpg",
    },

    details: {
      seo: {
        title: "Obstetrics & Pregnancy Care in Bharuch | Sarvam Hospital",
        description:
          "Get comprehensive pregnancy and maternity care in Bharuch at Sarvam Hospital, including antenatal care, normal delivery, C-section, high-risk pregnancy and postpartum care.",
        keywords: [
          "obstetrics hospital in Bharuch",
          "pregnancy care in Bharuch",
          "maternity hospital in Bharuch",
          "pregnancy doctor in Bharuch",
          "antenatal care in Bharuch",
          "normal delivery in Bharuch",
          "C-section hospital in Bharuch",
          "high-risk pregnancy care in Bharuch",
          "postpartum care in Bharuch",
        ],
      },

      hero: {
        title: "Comprehensive Pregnancy & Maternity Care",
        description:
          "At Sarvam Hospital – Woman & Child Speciality, we provide comprehensive obstetric care throughout pregnancy — from the early stages of pregnancy to childbirth and postpartum recovery. Our focus is on closely monitoring the health of both mother and baby and providing appropriate care and guidance at every stage.",
        image: "/images/services/obstetrics/hero.jpg",
      },

      subServices: [
        {
          id: "pregnancy-care",
          title: "Pregnancy Care",
          slug: "pregnancy-care",
          image: "/images/services/obstetrics/pregnancy-care.jpg",

          description:
            "Every pregnancy requires regular medical supervision to monitor the health and development of both mother and baby. Our pregnancy care services include routine consultations, maternal health monitoring, assessment of fetal growth and guidance throughout the pregnancy journey.",
        },

        {
          id: "antenatal-care",
          title: "Antenatal Care",
          slug: "antenatal-care",
          image: "/images/services/obstetrics/antenatal-care.jpg",

          description:
            "Regular antenatal check-ups help identify and manage potential concerns during pregnancy. Antenatal care may include:",

          bullets: [
            "Routine pregnancy check-ups",
            "Blood pressure and weight monitoring",
            "Recommended blood and urine investigations",
            "Fetal growth and development monitoring",
            "Nutritional and lifestyle guidance",
            "Guidance regarding recommended vaccinations during pregnancy",
            "Planning and preparation for delivery",
          ],

          note: "The frequency and type of investigations are advised according to the individual pregnancy.",
        },

        {
          id: "normal-delivery",
          title: "Normal Delivery",
          slug: "normal-delivery",
          image: "/images/services/obstetrics/normal-delivery.jpg",

          description:
            "When medically appropriate, normal vaginal delivery may be recommended. Throughout labour, the condition of the mother and baby is monitored, and decisions regarding delivery are made according to clinical requirements.",

          additionalContent:
            "Our team aims to provide supportive and responsible maternity care throughout labour and childbirth.",
        },

        {
          id: "painless-delivery",
          title: "Painless Delivery",
          slug: "painless-delivery",
          image: "/images/services/obstetrics/painless-delivery.jpg",

          description:
            "Pain-management options may be available during labour for suitable patients. The appropriate method depends on the mother's health, stage of labour and clinical assessment.",

          additionalContent:
            "Patients can discuss available labour pain-management options with the obstetrician during antenatal consultations.",
        },

        {
          id: "forceps-delivery",
          title: "Forceps Delivery",
          slug: "forceps-delivery",
          image: "/images/services/obstetrics/forceps-delivery.jpg",

          description:
            "In certain situations, an obstetrician may recommend an assisted vaginal delivery using forceps to help safely complete the delivery.",

          additionalContent:
            "Forceps delivery is performed only when clinically indicated and after assessing the condition of both mother and baby.",
        },

        {
          id: "caesarean-section",
          title: "Caesarean Section",
          slug: "caesarean-section",
          image: "/images/services/obstetrics/caesarean-section.jpg",

          description:
            "A Caesarean section is a surgical method of delivering a baby and may be recommended when vaginal delivery is not considered appropriate or safe for the mother or baby.",

          bulletIntro: "A C-section may be considered in situations such as:",

          bullets: [
            "Certain fetal positions",
            "Placental complications",
            "Fetal or maternal concerns during labour",
            "Previous pregnancy or delivery-related factors",
            "Other medical indications identified by the obstetrician",
          ],

          note: "The decision is based on individual clinical circumstances.",
        },

        {
          id: "high-risk-pregnancy-care",
          title: "High-Risk Pregnancy Care",
          slug: "high-risk-pregnancy-care",
          image: "/images/services/obstetrics/high-risk-pregnancy-care.jpg",

          description:
            "Some pregnancies require closer monitoring because of maternal health conditions, pregnancy-related complications or concerns regarding the baby's development.",

          additionalContent:
            "High-risk pregnancy care may involve additional consultations, investigations, ultrasound monitoring and coordination of care depending on the individual situation.",

          bulletIntro:
            "Conditions requiring additional monitoring may include:",

          bullets: [
            "High blood pressure during pregnancy",
            "Gestational diabetes",
            "Multiple pregnancy",
            "Placental problems",
            "Previous pregnancy complications",
            "Maternal medical conditions",
            "Concerns regarding fetal growth",
          ],
        },

        {
          id: "postpartum-care",
          title: "Postpartum Care",
          slug: "postpartum-care",
          image: "/images/services/obstetrics/postpartum-care.jpg",

          description:
            "Care continues after childbirth. Postpartum consultations help monitor the mother's recovery and address concerns that may arise during the weeks following delivery.",

          bulletIntro: "Postpartum care may include:",

          bullets: [
            "Recovery after vaginal delivery or C-section",
            "Wound or stitch assessment",
            "Breastfeeding guidance",
            "Maternal health assessment",
            "Contraception and family-planning counselling",
            "Discussion of emotional well-being after childbirth",
          ],
        },

        {
          id: "pregnancy-ultrasound",
          title: "Pregnancy Ultrasound & Fetal Monitoring",
          slug: "pregnancy-ultrasound",
          image: "/images/services/obstetrics/pregnancy-ultrasound.jpg",

          description:
            "Ultrasound examinations may be recommended at different stages of pregnancy to assess pregnancy progression and fetal development.",

          additionalContent:
            "Sarvam Hospital also provides Obstetric Ultrasonography and Colour Doppler services.",

          relatedService: {
            title: "Sonography",
            slug: "sonography",
            label: "Learn More About Sonography",
          },
        },
      ],

      cta: {
        title: "Start Your Pregnancy Care With Us",
        description:
          "Speak with our team about pregnancy, maternity and delivery care tailored to your needs.",
      },

      faq: [
        {
          question: "When should I start pregnancy care?",
          answer:
            "Pregnancy care should begin as early as possible after pregnancy is confirmed. Early antenatal care helps your obstetrician assess your health, pregnancy progress and any factors that may require additional monitoring.",
        },
        {
          question: "How often should I have pregnancy check-ups?",
          answer:
            "The frequency of pregnancy check-ups depends on your stage of pregnancy and individual health needs. Your obstetrician will recommend an appropriate schedule and may advise more frequent visits if closer monitoring is required.",
        },
        {
          question: "What is high-risk pregnancy care?",
          answer:
            "High-risk pregnancy care is closer monitoring for pregnancies where the mother, baby or both may have a higher risk of complications. Conditions such as high blood pressure, gestational diabetes, multiple pregnancy or concerns about fetal growth may require additional care.",
        },
        {
          question: "When is a C-section recommended?",
          answer:
            "A Caesarean section may be recommended when vaginal delivery is not considered the safest option for the mother or baby. The decision depends on individual clinical circumstances and may be planned or become necessary during labour.",
        },
        {
          question: "Does Sarvam Hospital provide postpartum care?",
          answer:
            "Yes. Postpartum care may include monitoring recovery after delivery, wound or stitch assessment, breastfeeding guidance, maternal health assessment, contraception counselling and discussion of emotional well-being.",
        },
      ],
    },
  },

  // Gynaecology
  {
    id: "gynaecology",
    title: "Gynaecology",
    slug: "gynaecology",

    nav: {
      title: "Gynaecology",
      description: "Women's Gynaecological & Reproductive Care",
    },

    card: {
      title: "Women's Gynaecological Care",
      description:
        "Personalised care for menstrual, hormonal, reproductive and other gynaecological health concerns.",
      image: "/images/services/gynaecology/card.jpg",
    },

    details: {
      seo: {
        title: "Gynaecology Services in Bharuch | Sarvam Hospital",
        description:
          "Comprehensive gynaecology care in Bharuch for menstrual, hormonal, reproductive and women's health concerns, including menopause, ovarian cysts and gynaecological surgery.",
        keywords: [
          "gynaecologist in Bharuch",
          "gynaecology hospital in Bharuch",
          "women's health doctor in Bharuch",
          "gynaecology treatment in Bharuch",
          "menopause clinic in Bharuch",
          "ovarian cyst treatment in Bharuch",
          "hysterectomy in Bharuch",
          "laparoscopic gynaecology in Bharuch",
          "women's health hospital in Bharuch",
        ],
      },

      hero: {
        title: "Comprehensive Women's Gynaecological Care",
        description:
          "At Sarvam Hospital – Woman & Child Speciality, our gynaecology services focus on the health and well-being of women through different stages of life. From menstrual and hormonal concerns to menopause, reproductive health and gynaecological conditions requiring medical or surgical management, our care is tailored to individual needs.",
        image: "/images/services/gynaecology/hero.jpg",
      },

      cta: {
        title: "Take Care of Your Women's Health",
        description:
          "Discuss your gynaecological concerns with our experienced team and explore the right care for you.",
      },

      subServices: [
        {
          id: "general-gynaecology",
          title: "General Gynaecology",
          slug: "general-gynaecology",
          image: "/images/services/gynaecology/general-gynaecology.jpg",

          description:
            "Our gynaecology services address a wide range of women's health concerns, including menstrual, hormonal and reproductive health issues.",

          bulletIntro: "Consultation may include evaluation and management of:",

          bullets: [
            "Irregular or painful periods",
            "Excessive menstrual bleeding",
            "Menstrual and hormonal concerns",
            "Vaginal or pelvic symptoms",
            "Reproductive health concerns",
            "Other gynaecological conditions",
          ],
        },

        {
          id: "menopause-clinic",
          title: "Menopause Clinic",
          slug: "menopause-clinic",
          image: "/images/services/gynaecology/menopause-clinic.jpg",

          description:
            "Menopause is an important stage of a woman's life and may be associated with physical and emotional changes.",

          additionalContent:
            "The Menopause Clinic provides medical guidance for concerns such as:",

          bullets: [
            "Menstrual changes",
            "Hot flashes",
            "Sleep disturbances",
            "Mood changes",
            "Vaginal dryness",
            "Other menopause-related concerns",
          ],

          note: "Individual assessment helps determine appropriate management and follow-up.",
        },

        {
          id: "ovarian-cyst-management",
          title: "Ovarian Cyst Management",
          slug: "ovarian-cyst-management",
          image: "/images/services/gynaecology/ovarian-cyst-management.jpg",

          description:
            "Ovarian cysts are fluid-filled sacs that can develop in or on the ovaries. Many cysts are benign and may resolve on their own, while some require further evaluation or treatment.",

          bulletIntro: "Management may include:",

          bullets: [
            "Clinical assessment",
            "Ultrasound evaluation",
            "Observation and follow-up where appropriate",
            "Medical management when indicated",
            "Surgical treatment when required",
          ],

          relatedService: {
            title: "Sonography & Colour Doppler",
            slug: "sonography",
            label: "Learn More",
          },
        },

        {
          id: "hysterectomy",
          title: "Hysterectomy",
          slug: "hysterectomy",
          image: "/images/services/gynaecology/hysterectomy.jpg",

          description:
            "A hysterectomy is a surgical procedure to remove the uterus. It may be recommended for certain gynaecological conditions when other treatment options are not suitable or effective.",

          bulletIntro:
            "Depending on the medical condition and individual circumstances, hysterectomy may be performed through:",

          bullets: [
            "Vaginal approach",
            "Abdominal approach",
            "Laparoscopic approach",
          ],

          note: "The appropriate surgical approach is determined by the treating gynaecologist.",

          relatedService: {
            title: "Laparoscopy & Gynaecological Surgery",
            slug: "laparoscopy",
            label: "Learn More",
          },
        },

        {
          id: "tubal-ligation",
          title: "Tubal Ligation",
          slug: "tubal-ligation",
          image: "/images/services/gynaecology/tubal-ligation.jpg",

          description:
            "Tubal ligation is a permanent method of contraception in which the fallopian tubes are blocked or sealed to prevent pregnancy.",

          additionalContent:
            "It may be considered by women who have completed their family and are looking for a permanent contraceptive option. Appropriate counselling is provided before the procedure.",
        },

        {
          id: "cervical-ovarian-conditions",
          title: "Cervical & Ovarian Conditions",
          slug: "cervical-ovarian-conditions",
          image: "/images/services/gynaecology/cervical-ovarian-conditions.jpg",

          description:
            "Sarvam Hospital provides evaluation and management of various conditions affecting the cervix and ovaries.",

          bulletIntro: "Assessment may involve:",

          bullets: [
            "Gynaecological consultation",
            "Clinical examination",
            "Ultrasound and other investigations when required",
            "Medical or surgical management based on diagnosis",
          ],

          note: "The existing hospital information also mentions diagnosis and surgical management of cervical and ovarian cancer. This should be presented carefully and only according to the hospital's actual specialist and surgical capabilities.",
        },

        {
          id: "mtp-services",
          title: "MTP Services",
          slug: "mtp-services",
          image: "/images/services/gynaecology/mtp-services.jpg",

          description:
            "Medical Termination of Pregnancy (MTP) services are provided where legally permitted and medically appropriate.",

          additionalContent:
            "Care includes appropriate medical assessment, counselling and management according to the stage of pregnancy and applicable medical and legal guidelines.",

          note: "Patient privacy and confidentiality should be maintained throughout the consultation and treatment process.",
        },

        {
          id: "laparoscopic-gynaecological-surgery",
          title: "Laparoscopic Gynaecological Surgery",
          slug: "laparoscopic-gynaecological-surgery",
          image:
            "/images/services/gynaecology/laparoscopic-gynaecological-surgery.jpg",

          description:
            "Laparoscopy is a minimally invasive surgical technique used to diagnose and treat certain gynaecological conditions through small incisions.",

          bulletIntro: "It may be used for selected conditions such as:",

          bullets: [
            "Ovarian cysts",
            "Endometriosis",
            "Certain tubal conditions",
            "Pelvic adhesions",
            "Selected gynaecological surgeries",
          ],

          relatedService: {
            title: "Laparoscopy",
            slug: "laparoscopy",
            label: "Learn More",
          },
        },
      ],

      faq: [
        {
          question: "When should I consult a gynaecologist?",
          answer:
            "You may consult a gynaecologist for concerns such as irregular or painful periods, excessive bleeding, pelvic or vaginal symptoms, hormonal concerns, reproductive health issues or other women's health problems.",
        },
        {
          question: "What conditions can be evaluated by a gynaecologist?",
          answer:
            "A gynaecological consultation may help evaluate menstrual, hormonal, reproductive and pelvic health concerns. Depending on your symptoms, your doctor may recommend an examination, ultrasound or other investigations.",
        },
        {
          question: "What is menopause and when should I seek medical advice?",
          answer:
            "Menopause is a natural stage of a woman's life that can be associated with changes such as hot flashes, sleep disturbances, mood changes and vaginal dryness. Medical guidance can help manage symptoms and address individual concerns.",
        },
        {
          question: "When does an ovarian cyst require treatment?",
          answer:
            "Many ovarian cysts are benign and may resolve without treatment. Some cysts may require follow-up, medical management or surgery depending on their size, appearance, symptoms and other clinical findings.",
        },
        {
          question: "What is a hysterectomy?",
          answer:
            "A hysterectomy is a surgical procedure to remove the uterus. It may be recommended for certain gynaecological conditions when other treatment options are not suitable or effective. The surgical approach depends on the individual medical condition.",
        },
      ],
    },
  },

  // Infertility – IUI & IVF
  {
    id: "infertility-iui-ivf",
    title: "Infertility – IUI & IVF",
    slug: "infertility-iui-ivf",

    nav: {
      title: "Infertility – IUI & IVF",
      description: "Fertility Evaluation, IUI & IVF Treatment",
    },

    card: {
      title: "Fertility, IUI & IVF Care",
      description:
        "Fertility evaluation and treatment support including IUI, IVF and fertility ultrasound services.",
      image: "/images/services/infertility-iui-ivf/card.jpg",
    },

    details: {
      seo: {
        title: "Infertility, IUI & IVF Treatment in Bharuch | Sarvam Hospital",
        description:
          "Explore fertility care in Bharuch at Sarvam Hospital, including infertility evaluation, fertility ultrasound, IUI and IVF treatment based on individual fertility needs.",
        keywords: [
          "infertility treatment in Bharuch",
          "fertility doctor in Bharuch",
          "fertility clinic in Bharuch",
          "IUI treatment in Bharuch",
          "IVF treatment in Bharuch",
          "IUI doctor in Bharuch",
          "IVF doctor in Bharuch",
          "fertility evaluation in Bharuch",
          "infertility specialist in Bharuch",
        ],
      },

      hero: {
        title: "Fertility Care & Assisted Reproductive Services",
        description:
          "At Sarvam Hospital – Woman & Child Speciality, infertility care focuses on understanding the individual factors affecting conception and providing appropriate fertility guidance and treatment. Depending on the medical evaluation, treatment may include fertility assessment, fertility ultrasound, Intrauterine Insemination (IUI) or In Vitro Fertilization (IVF).",
        image: "/images/services/infertility-iui-ivf/hero.jpg",
      },

      subServices: [
        {
          id: "fertility-evaluation",
          title: "Fertility Evaluation",
          slug: "fertility-evaluation",
          image:
            "/images/services/infertility-iui-ivf/fertility-evaluation.jpg",

          description:
            "A detailed fertility evaluation helps identify possible factors affecting conception in either partner.",

          bulletIntro: "Depending on individual needs, evaluation may include:",

          bullets: [
            "Medical and reproductive history",
            "Menstrual and ovulation assessment",
            "Gynaecological examination",
            "Ultrasound evaluation",
            "Assessment of ovarian and uterine health",
            "Evaluation of fallopian tubes when indicated",
            "Assessment of male-factor infertility",
            "Other investigations as recommended by the fertility specialist",
          ],

          note: "The appropriate treatment plan is determined after evaluating the individual or couple.",
        },

        {
          id: "iui",
          title: "IUI – Intrauterine Insemination",
          slug: "iui",
          image: "/images/services/infertility-iui-ivf/iui.jpg",

          description:
            "Intrauterine Insemination (IUI) is a fertility treatment in which specially prepared sperm is placed directly into the uterus around the time of ovulation.",

          bulletIntro: "IUI may be considered in selected cases such as:",

          bullets: [
            "Unexplained infertility",
            "Certain cases of reduced sperm count or motility",
            "Cervical factors affecting conception",
            "Certain ovulation-related fertility problems",
            "Selected cases of ejaculation-related difficulties",
          ],

          note: "The suitability and expected success of IUI depend on several factors, including age, ovarian reserve, sperm parameters and the underlying cause of infertility.",
        },

        {
          id: "ivf",
          title: "IVF – In Vitro Fertilization",
          slug: "ivf",
          image: "/images/services/infertility-iui-ivf/ivf.jpg",

          description:
            "In Vitro Fertilization (IVF) is an assisted reproductive technology in which eggs and sperm are brought together in a laboratory to achieve fertilization. An embryo may subsequently be transferred to the uterus as part of the treatment.",

          bulletIntro: "IVF may be considered in situations such as:",

          bullets: [
            "Blocked or damaged fallopian tubes",
            "Certain male-factor infertility",
            "Some ovulation-related fertility problems",
            "Certain conditions affecting fertility",
            "Previous tubal surgery",
            "Unexplained infertility",
            "Other situations where IVF is recommended by the fertility specialist",
          ],

          additionalContent:
            "The IVF process generally involves ovarian stimulation, egg retrieval, fertilization, embryo development and embryo transfer, depending on the individual treatment plan.",

          importantNote:
            "If Sarvam does not have an in-house IVF laboratory and embryo culture facility, the website should clearly describe IVF as IVF treatment/fertility care provided through the hospital or associated fertility centre, rather than implying that the entire laboratory process is performed at Sarvam.",
        },

        {
          id: "fertility-ultrasound",
          title: "Fertility Ultrasound",
          slug: "fertility-ultrasound",
          image:
            "/images/services/infertility-iui-ivf/fertility-ultrasound.jpg",

          description:
            "Ultrasound plays an important role in fertility assessment and treatment monitoring.",

          bulletIntro: "It may be used to:",

          bullets: [
            "Assess the uterus and ovaries",
            "Evaluate the reproductive organs",
            "Monitor follicular development",
            "Track ovulation",
            "Support fertility treatment planning",
            "Monitor the response to treatment",
          ],

          note: "Fertility ultrasound may be recommended at different stages of the treatment cycle according to the fertility specialist's advice.",

          relatedService: {
            title: "Sonography",
            slug: "sonography",
            label: "Learn More About Sonography",
          },
        },
      ],

      cta: {
        title: "Take the Next Step Towards Parenthood",
        description:
          "Talk to our fertility care team about evaluation, IUI, IVF and treatment options suited to your needs.",
      },

      faq: [
        {
          question: "When should a couple consider an infertility evaluation?",
          answer:
            "An infertility evaluation may be considered when a couple has difficulty conceiving. The appropriate timing depends on factors such as age, medical history and individual circumstances. A fertility specialist can recommend when evaluation is appropriate.",
        },
        {
          question: "What happens during a fertility evaluation?",
          answer:
            "A fertility evaluation may include medical and reproductive history, menstrual and ovulation assessment, gynaecological examination, ultrasound and assessment of ovarian, uterine or tubal factors. Male-factor infertility may also be evaluated when appropriate.",
        },
        {
          question: "What is IUI?",
          answer:
            "Intrauterine insemination, or IUI, is a fertility treatment in which specially prepared sperm is placed directly into the uterus around the time of ovulation. Its suitability depends on the individual's fertility assessment.",
        },
        {
          question: "What is IVF?",
          answer:
            "In vitro fertilization, or IVF, is an assisted reproductive treatment in which eggs and sperm are brought together in a laboratory to achieve fertilization. An embryo may then be transferred to the uterus as part of the treatment.",
        },
        {
          question: "Is fertility ultrasound part of infertility treatment?",
          answer:
            "Fertility ultrasound may be used to evaluate the uterus and ovaries, monitor follicular development and ovulation, and support fertility treatment planning. The timing and frequency depend on the individual treatment plan.",
        },
      ],
    },
  },

  // Paediatrics
  {
    id: "paediatrics",
    title: "Paediatrics",
    slug: "paediatrics",

    nav: {
      title: "Paediatrics",
      description: "Child Health, Growth & Development Care",
    },

    card: {
      title: "Child Healthcare",
      description:
        "Comprehensive paediatric care including consultations, growth monitoring, vaccinations and common childhood concerns.",
      image: "/images/services/paediatrics/card.jpg",
    },

    details: {
      seo: {
        title: "Paediatrician & Child Care in Bharuch | Sarvam Hospital",
        description:
          "Comprehensive paediatric care in Bharuch for infants, children and adolescents, including child health check-ups, vaccination, growth monitoring and common childhood illnesses.",
        keywords: [
          "paediatrician in Bharuch",
          "child specialist in Bharuch",
          "paediatric hospital in Bharuch",
          "child care hospital in Bharuch",
          "child health check-up in Bharuch",
          "child vaccination in Bharuch",
          "baby doctor in Bharuch",
          "paediatric consultation in Bharuch",
          "child specialist doctor in Bharuch",
        ],
      },

      hero: {
        title: "Comprehensive Child Healthcare",
        description:
          "At Sarvam Hospital – Woman & Child Speciality, our paediatric services focus on the health, growth and well-being of infants, children and adolescents. From routine consultations and vaccinations to the evaluation and management of common childhood illnesses, our paediatric care is tailored to the needs of every child.",
        image: "/images/services/paediatrics/hero.jpg",
      },

      subServices: [
        {
          id: "paediatric-consultation",
          title: "Paediatric Consultation",
          slug: "paediatric-consultation",
          image: "/images/services/paediatrics/paediatric-consultation.jpg",

          description:
            "Regular paediatric consultations help monitor a child's health, growth and development and provide timely medical care when concerns arise.",

          bulletIntro: "Paediatric consultation may include:",

          bullets: [
            "General child health assessment",
            "Growth and development monitoring",
            "Evaluation of childhood symptoms and illnesses",
            "Nutritional and dietary guidance",
            "Assessment of recurrent health concerns",
            "Preventive healthcare guidance",
            "Follow-up care as recommended by the paediatrician",
          ],

          note: "Parents can consult the paediatrician whenever they have concerns about their child's health, growth, development or well-being.",
        },

        {
          id: "child-health",
          title: "Child Health",
          slug: "child-health",
          image: "/images/services/paediatrics/child-health.jpg",

          description:
            "Healthy childhood development involves more than treating illness. Regular health monitoring can help identify developmental, nutritional or health concerns at an appropriate stage.",

          bulletIntro: "Child health care may include:",

          bullets: [
            "Growth monitoring",
            "Developmental assessment",
            "Nutritional guidance",
            "General health evaluation",
            "Preventive healthcare",
            "Guidance for parents and caregivers",
          ],

          note: "The frequency of routine visits and assessments depends on the child's age and individual healthcare needs.",
        },

        {
          id: "vaccination",
          title: "Vaccination",
          slug: "vaccination",
          image: "/images/services/paediatrics/vaccination.jpg",

          description:
            "Vaccination is an important part of preventive healthcare for children. Vaccines help protect against a range of vaccine-preventable infections.",

          additionalContent:
            "Sarvam Hospital provides childhood vaccination services according to recommended vaccination schedules and the child's individual requirements.",

          bulletIntro: "Parents can discuss:",

          bullets: [
            "Routine childhood vaccinations",
            "Age-appropriate vaccination schedules",
            "Catch-up vaccination when required",
            "Vaccination-related questions and concerns",
          ],

          cta: {
            title:
              "Consult Our Paediatrician About Your Child's Vaccination Schedule",
          },

          note: 'Instead of saying "all vaccines are available," use "Childhood Vaccination Services Available" unless the hospital provides and maintains a confirmed list of vaccines.',
        },

        {
          id: "common-childhood-illnesses",
          title: "Common Childhood Illnesses",
          slug: "common-childhood-illnesses",
          image: "/images/services/paediatrics/common-childhood-illnesses.jpg",

          description:
            "Children may experience a variety of common infections and health concerns during their growing years. A paediatric consultation can help assess symptoms and determine appropriate treatment.",

          bulletIntro: "Paediatric evaluation may include concerns such as:",

          bullets: [
            "Fever",
            "Cough and cold",
            "Respiratory infections",
            "Breathing difficulties",
            "Allergic symptoms",
            "Gastrointestinal complaints",
            "Vomiting or diarrhoea",
            "Nutritional concerns",
            "Other common childhood health problems",
          ],

          note: "Treatment and investigations are recommended according to the child's symptoms, age and clinical condition.",

          importantNote:
            "Avoid presenting this as an exhaustive list of conditions treated by the hospital unless the paediatrician confirms it.",
        },

        {
          id: "paediatric-facilities",
          title: "Paediatric Facilities",
          slug: "paediatric-facilities",
          image: "/images/services/paediatrics/paediatric-facilities.jpg",

          description:
            "Sarvam Hospital's existing website information mentions several facilities supporting paediatric and newborn care.",

          bulletIntro: "Available Facilities",

          bullets: [
            "Paediatrician availability around delivery",
            "Newborn warmer",
            "Phototherapy",
            "Nebulisation facility",
            "Glucometer",
            "Infusion pump",
            "Multipara monitor",
            "Pulse oximeter",
            "Laboratory facilities",
            "Sonography",
            "Medicines",
          ],

          note: "These facilities support assessment, monitoring and treatment according to the child's medical requirements.",
        },
      ],

      cta: {
        title: "Give Your Child the Care They Deserve",
        description:
          "From routine check-ups to childhood health concerns, our paediatric team is here to support your child's health and development.",
      },
      faq: [
        {
          question: "When should my child visit a paediatrician?",
          answer:
            "Children can benefit from routine paediatric visits to monitor growth, development, nutrition, vaccination and general health. Additional consultation may be needed when your child has symptoms, recurrent health concerns or developmental concerns.",
        },
        {
          question: "What does a paediatric consultation include?",
          answer:
            "A paediatric consultation may include general health assessment, growth and development monitoring, evaluation of symptoms, nutritional guidance, preventive healthcare advice and follow-up based on the child's individual needs.",
        },
        {
          question: "Does Sarvam Hospital provide childhood vaccination?",
          answer:
            "Yes. Sarvam Hospital provides childhood vaccination services according to recommended vaccination schedules and the child's individual requirements. Parents can discuss routine, age-appropriate and catch-up vaccination with the paediatrician.",
        },
        {
          question: "When should I consult a paediatrician for fever?",
          answer:
            "The importance of fever depends on the child's age, temperature, symptoms and overall condition. Very young infants with fever require prompt medical assessment. Medical advice should also be sought when fever is persistent or accompanied by concerning symptoms.",
        },
        {
          question:
            "Can a paediatrician monitor my child's growth and development?",
          answer:
            "Yes. Regular paediatric visits can help monitor weight, height or length, head circumference, developmental milestones, nutrition and overall health. Parents should discuss any concerns about growth or development with the paediatrician.",
        },
      ],
    },
  },

  // Newborn & Neonatal Care
  {
    id: "newborn-neonatal-care",
    title: "Newborn & Neonatal Care",
    slug: "newborn-neonatal-care",

    nav: {
      title: "Newborn & Neonatal Care",
      description: "Newborn Assessment, Monitoring & Care",
    },

    card: {
      title: "Newborn & Neonatal Care",
      description:
        "Dedicated newborn care with assessment, monitoring, thermal support, phototherapy and paediatric care.",
      image: "/images/services/newborn-neonatal-care/card.jpg",
    },

    details: {
      seo: {
        title: "Newborn & Neonatal Care in Bharuch | Sarvam Hospital",
        description:
          "Newborn and neonatal care in Bharuch at Sarvam Hospital, including newborn assessment, paediatric support at delivery, phototherapy, newborn warming and monitoring.",
        keywords: [
          "newborn care in Bharuch",
          "neonatal care in Bharuch",
          "newborn hospital in Bharuch",
          "newborn doctor in Bharuch",
          "paediatrician at delivery in Bharuch",
          "newborn jaundice treatment in Bharuch",
          "phototherapy for newborns in Bharuch",
          "neonatal monitoring in Bharuch",
          "baby care hospital in Bharuch",
        ],
      },

      hero: {
        title: "Specialised Care for Newborns",
        description:
          "The first hours and days of life are an important period for a newborn's health and development. Sarvam Hospital – Woman & Child Speciality provides newborn assessment, monitoring and paediatric support around the time of delivery, along with facilities for newborns who require additional observation or treatment. Our newborn care is focused on early assessment, timely medical attention and monitoring according to each baby's individual needs.",
        image: "/images/services/newborn-neonatal-care/hero.jpg",
      },

      subServices: [
        {
          id: "newborn-assessment",
          title: "Newborn Assessment",
          slug: "newborn-assessment",
          image:
            "/images/services/newborn-neonatal-care/newborn-assessment.jpg",

          description:
            "Every newborn may require an initial health assessment after birth to evaluate overall well-being and identify any concerns that may require further observation.",

          bulletIntro: "Newborn assessment may include:",

          bullets: [
            "General physical examination",
            "Assessment of breathing and heart rate",
            "Temperature monitoring",
            "Feeding assessment",
            "Monitoring of activity and overall condition",
            "Assessment for conditions requiring paediatric attention",
          ],

          note: "Further investigations or monitoring are recommended when clinically indicated.",
        },

        {
          id: "paediatrician-at-delivery",
          title: "Paediatrician at Delivery",
          slug: "paediatrician-at-delivery",
          image:
            "/images/services/newborn-neonatal-care/paediatrician-at-delivery.jpg",

          description:
            "A paediatrician is available around the time of delivery to provide medical assessment and support for the newborn when required.",

          additionalContent:
            "Paediatric support may be particularly important when a baby needs additional assessment immediately after birth or when there are maternal or pregnancy-related factors that may affect the newborn.",

          relatedService: {
            title: "Paediatrics",
            slug: "paediatrics",
            label: "Learn More About Paediatrics",
          },
        },

        {
          id: "newborn-warmer",
          title: "Newborn Warmer",
          slug: "newborn-warmer",
          image: "/images/services/newborn-neonatal-care/newborn-warmer.jpg",

          description:
            "A newborn warmer helps maintain an appropriate body temperature for babies who require additional thermal support after birth.",

          additionalContent:
            "Maintaining the baby's temperature is an important part of newborn care, particularly for babies who require closer observation or medical support.",
        },

        {
          id: "phototherapy",
          title: "Phototherapy",
          slug: "phototherapy",
          image: "/images/services/newborn-neonatal-care/phototherapy.jpg",

          description:
            "Phototherapy is a commonly used treatment for newborn jaundice when recommended by a paediatrician.",

          additionalContent:
            "During phototherapy, the baby is exposed to a specific type of therapeutic light while being monitored by the medical team.",

          note: "The need for phototherapy and its duration depend on the baby's age, bilirubin level and overall clinical condition.",
        },

        {
          id: "neonatal-monitoring",
          title: "Neonatal Monitoring",
          slug: "neonatal-monitoring",
          image:
            "/images/services/newborn-neonatal-care/neonatal-monitoring.jpg",

          description:
            "Newborns who require additional observation may be monitored using appropriate clinical equipment and under paediatric supervision.",

          bulletIntro: "Sarvam Hospital's existing facilities include:",

          bullets: [
            "Pulse oximeter",
            "Multipara monitor",
            "Glucometer",
            "Newborn warmer",
            "Phototherapy",
            "Infusion pump",
          ],

          note: "The type and duration of monitoring depend on the baby's individual medical condition.",
        },

        {
          id: "neonatologist-consultation",
          title: "Neonatologist Consultation",
          slug: "neonatologist-consultation",
          image:
            "/images/services/newborn-neonatal-care/neonatologist-consultation.jpg",

          conditional: true,

          description:
            "Specialist consultation is available for newborns who require additional assessment or management by a neonatology specialist.",

          importantNote:
            "Include this service only if a neonatologist is confirmed to be available through Sarvam Hospital.",
        },
      ],

      cta: {
        title: "Gentle Care for Your Newborn",
        description:
          "Our paediatric team provides newborn assessment, monitoring and care based on your baby's individual needs.",
      },

      faq: [
        {
          question: "What care does a newborn need immediately after birth?",
          answer:
            "A newborn may require an initial health assessment to check breathing, heart rate, temperature, feeding ability, activity and overall condition. Additional monitoring or investigations may be recommended when clinically required.",
        },
        {
          question: "Is a paediatrician available around delivery?",
          answer:
            "Sarvam Hospital provides paediatrician availability around the time of delivery for newborn assessment and support when required.",
        },
        {
          question: "What is newborn phototherapy?",
          answer:
            "Phototherapy is a treatment used for newborn jaundice when recommended by a paediatrician. The baby is exposed to therapeutic light while being monitored, and the need and duration of treatment depend on the baby's clinical condition.",
        },
        {
          question: "Why might a newborn need a warmer?",
          answer:
            "Newborn babies can lose body heat more easily than older children. A newborn warmer may be used when a baby requires additional thermal support, particularly after birth or when closer observation is needed.",
        },
        {
          question: "When should a newborn be assessed by a paediatrician?",
          answer:
            "Newborns require an early health assessment after birth and follow-up according to their individual needs. Earlier medical review may be particularly important for babies with feeding difficulties, jaundice, prematurity, low birth weight or other concerns.",
        },
      ],
    },
  },

  // Sonography
  {
    id: "sonography",
    title: "Sonography",
    slug: "sonography",

    nav: {
      title: "Sonography",
      description: "Pregnancy, Fertility & Gynaecological Ultrasound",
    },

    card: {
      title: "Sonography & Ultrasound",
      description:
        "Ultrasound services supporting pregnancy care, fertility assessment and gynaecological evaluation.",
      image: "/images/services/sonography/card.jpg",
    },

    details: {
      seo: {
        title: "Sonography & Ultrasound in Bharuch | Sarvam Hospital",
        description:
          "Ultrasound and sonography services in Bharuch at Sarvam Hospital, including obstetric ultrasound, Colour Doppler, fertility ultrasound and gynaecological ultrasound.",
        keywords: [
          "sonography in Bharuch",
          "ultrasound in Bharuch",
          "sonography centre in Bharuch",
          "ultrasound scan in Bharuch",
          "pregnancy ultrasound in Bharuch",
          "obstetric ultrasound in Bharuch",
          "Colour Doppler in Bharuch",
          "fertility ultrasound in Bharuch",
          "gynaecological ultrasound in Bharuch",
        ],
      },

      hero: {
        title: "Sonography & Ultrasound Services",
        description:
          "Ultrasound imaging services supporting pregnancy care, fertility assessment and gynaecological evaluation.",
        image: "/images/services/sonography/hero.jpg",
      },

      subServices: [
        {
          id: "obstetric-ultrasound",
          title: "Obstetric Ultrasound",
          slug: "obstetric-ultrasound",
          image: "/images/services/sonography/obstetric-ultrasound.jpg",

          description:
            "Obstetric ultrasound is an important part of pregnancy care and helps monitor the health, growth and development of the baby throughout pregnancy.",

          bulletIntro: "It may help assess:",

          bullets: [
            "Pregnancy progression",
            "Fetal growth and development",
            "Fetal heartbeat and activity",
            "Fetal position",
            "Placental location",
            "Amniotic fluid",
            "Other pregnancy-related parameters",
          ],

          note: "The type and timing of ultrasound examinations are recommended according to the stage of pregnancy and individual medical requirements.",
        },

        {
          id: "colour-doppler",
          title: "Colour Doppler",
          slug: "colour-doppler",
          image: "/images/services/sonography/colour-doppler.jpg",

          description:
            "Colour Doppler is an ultrasound technique used to assess blood flow through blood vessels and may be recommended during pregnancy when clinically indicated.",

          bulletIntro: "It may help evaluate:",

          bullets: [
            "Maternal blood flow",
            "Placental circulation",
            "Fetal blood flow",
            "Blood flow in selected fetal vessels",
            "Other circulation-related parameters",
          ],

          note: "The need for Colour Doppler is determined by the treating obstetrician based on the individual pregnancy.",
        },

        {
          id: "fertility-ultrasound",
          title: "Fertility Ultrasound",
          slug: "fertility-ultrasound",
          image: "/images/services/sonography/fertility-ultrasound.jpg",

          description:
            "Fertility ultrasound helps evaluate the reproductive organs and may be used to monitor the menstrual cycle during fertility assessment or treatment.",

          bulletIntro: "It may include:",

          bullets: [
            "Assessment of the uterus",
            "Evaluation of the ovaries",
            "Follicular monitoring",
            "Monitoring of ovulation",
            "Assessment during fertility treatment",
            "Support for IUI or IVF treatment planning",
          ],

          note: "The timing and frequency of fertility ultrasound depend on the individual treatment plan.",
        },

        {
          id: "gynaecological-ultrasound",
          title: "Gynaecological Ultrasound",
          slug: "gynaecological-ultrasound",
          image: "/images/services/sonography/gynaecological-ultrasound.jpg",

          description:
            "Gynaecological ultrasound helps evaluate the uterus, ovaries and other pelvic structures and may assist in investigating various women's health concerns.",

          bulletIntro: "It may help assess:",

          bullets: [
            "Ovarian cysts",
            "Uterine fibroids",
            "Abnormal menstrual bleeding",
            "Pelvic pain",
            "Uterine and ovarian conditions",
            "Other gynaecological concerns",
          ],

          note: "Further evaluation or treatment is recommended based on the clinical findings and the treating gynaecologist's advice.",
        },
      ],

      cta: {
        title: "Get the Right Ultrasound at the Right Time",
        description:
          "Our ultrasound services support pregnancy, fertility and gynaecological care based on your doctor's recommendation.",
      },

      faq: [
        {
          question:
            "What types of ultrasound services are available at Sarvam Hospital?",
          answer:
            "Sarvam Hospital provides ultrasound services including obstetric ultrasound, Colour Doppler, fertility ultrasound and gynaecological ultrasound.",
        },
        {
          question: "What is an obstetric ultrasound?",
          answer:
            "An obstetric ultrasound uses ultrasound imaging to assess pregnancy progression, fetal growth and development and other pregnancy-related findings. The type and timing of scans depend on the stage of pregnancy and individual medical requirements.",
        },
        {
          question: "What is Colour Doppler during pregnancy?",
          answer:
            "Colour Doppler is an ultrasound technique that provides information about blood flow through selected blood vessels. During pregnancy, it may be recommended when additional assessment of maternal, placental or fetal circulation is clinically indicated.",
        },
        {
          question: "What is a fertility ultrasound used for?",
          answer:
            "Fertility ultrasound may be used to assess the uterus and ovaries, monitor follicular development and ovulation, and support fertility treatment planning or monitoring.",
        },
        {
          question: "What is a gynaecological ultrasound used to evaluate?",
          answer:
            "Gynaecological ultrasound can help evaluate the uterus, ovaries and other pelvic structures and may assist in investigating concerns such as ovarian cysts, fibroids, abnormal menstrual bleeding and pelvic pain.",
        },
      ],
    },
  },

  // Laparoscopy
  {
    id: "laparoscopy",
    title: "Laparoscopy",
    slug: "laparoscopy",

    nav: {
      title: "Laparoscopy",
      description: "Minimally Invasive Gynaecological Procedures",
    },

    card: {
      title: "Gynaecological Laparoscopy",
      description:
        "Minimally invasive laparoscopic procedures for selected gynaecological conditions and surgical needs.",
      image: "/images/services/laparoscopy/card.jpg",
    },

    details: {
      seo: {
        title: "Gynaecological Laparoscopy in Bharuch | Sarvam Hospital",
        description:
          "Minimally invasive gynaecological laparoscopic surgery in Bharuch at Sarvam Hospital, including diagnostic laparoscopy, laparoscopic hysterectomy and ovarian cystectomy.",
        keywords: [
          "laparoscopy in Bharuch",
          "gynaecological laparoscopy in Bharuch",
          "laparoscopic surgery in Bharuch",
          "laparoscopic hysterectomy in Bharuch",
          "ovarian cystectomy in Bharuch",
          "diagnostic laparoscopy in Bharuch",
          "laparoscopy surgeon in Bharuch",
          "minimally invasive gynaecological surgery in Bharuch",
          "gynaecological surgeon in Bharuch",
        ],
      },

      hero: {
        title: "Minimally Invasive Gynaecological Surgery",
        description:
          "Laparoscopy is a minimally invasive surgical technique used to diagnose and treat selected gynaecological conditions through small incisions. The procedure and surgical approach are determined according to the patient's condition and medical requirements.",
        image: "/images/services/laparoscopy/hero.jpg",
      },

      subServices: [
        {
          id: "diagnostic-laparoscopy",
          title: "Diagnostic Laparoscopy",
          slug: "diagnostic-laparoscopy",
          image: "/images/services/laparoscopy/diagnostic-laparoscopy.jpg",

          description:
            "Diagnostic laparoscopy allows the gynaecologist to examine the pelvic organs and identify conditions that may not be fully evaluated through routine examinations or imaging.",

          bulletIntro: "It may help assess:",

          bullets: [
            "Endometriosis",
            "Pelvic pain",
            "Pelvic adhesions",
            "Certain tubal conditions",
            "Selected fertility-related conditions",
            "Other abnormalities of the pelvic organs",
          ],

          note: "Further treatment may be performed during the same procedure when clinically appropriate.",
        },

        {
          id: "laparoscopic-hysterectomy",
          title: "Laparoscopic Hysterectomy",
          slug: "laparoscopic-hysterectomy",
          image: "/images/services/laparoscopy/laparoscopic-hysterectomy.jpg",

          description:
            "Laparoscopic hysterectomy is a minimally invasive procedure to remove the uterus using small abdominal incisions.",

          bulletIntro: "It may be considered for selected conditions such as:",

          bullets: [
            "Uterine fibroids",
            "Abnormal uterine bleeding",
            "Certain benign uterine conditions",
            "Other gynaecological conditions requiring hysterectomy",
          ],

          note: "The suitability of laparoscopic hysterectomy depends on the patient's medical condition and the treating gynaecologist's assessment.",
        },

        {
          id: "ovarian-cystectomy",
          title: "Ovarian Cystectomy",
          slug: "ovarian-cystectomy",
          image: "/images/services/laparoscopy/ovarian-cystectomy.jpg",

          description:
            "Ovarian cystectomy is a surgical procedure to remove an ovarian cyst while preserving the healthy ovarian tissue whenever medically appropriate.",

          bulletIntro: "It may be considered when an ovarian cyst:",

          bullets: [
            "Causes significant symptoms",
            "Persists or increases in size",
            "Has features requiring further evaluation",
            "Requires surgical treatment based on clinical assessment",
          ],

          note: "The surgical approach depends on the size, type and characteristics of the cyst and the patient's overall condition.",
        },

        {
          id: "other-gynaecological-laparoscopic-procedures",
          title: "Other Gynaecological Laparoscopic Procedures",
          slug: "other-gynaecological-laparoscopic-procedures",
          image:
            "/images/services/laparoscopy/other-gynaecological-procedures.jpg",

          description:
            "Laparoscopic techniques may also be used for selected gynaecological conditions and procedures based on individual medical requirements.",

          bulletIntro:
            "Depending on the condition, laparoscopic surgery may be considered for:",

          bullets: [
            "Endometriosis",
            "Pelvic adhesions",
            "Selected tubal conditions",
            "Other appropriate gynaecological procedures",
          ],

          note: "The recommended procedure and surgical approach are determined after clinical evaluation and appropriate investigations.",
        },
      ],

      cta: {
        title: "Discuss Your Surgical Options",
        description:
          "Speak with our gynaecology team to understand whether minimally invasive laparoscopic surgery may be suitable for your condition.",
      },

      faq: [
        {
          question: "What is gynaecological laparoscopy?",
          answer:
            "Gynaecological laparoscopy is a minimally invasive surgical technique that allows a gynaecologist to examine or treat selected conditions through small abdominal incisions.",
        },
        {
          question: "What conditions can diagnostic laparoscopy help evaluate?",
          answer:
            "Diagnostic laparoscopy may help evaluate conditions such as endometriosis, pelvic pain, pelvic adhesions, certain tubal conditions and selected fertility-related conditions.",
        },
        {
          question: "What is laparoscopic hysterectomy?",
          answer:
            "Laparoscopic hysterectomy is a minimally invasive procedure to remove the uterus using small abdominal incisions. Whether it is appropriate depends on the patient's condition and the treating gynaecologist's assessment.",
        },
        {
          question: "What is ovarian cystectomy?",
          answer:
            "Ovarian cystectomy is a surgical procedure to remove an ovarian cyst while preserving healthy ovarian tissue whenever medically appropriate. The surgical approach depends on the cyst and the patient's overall condition.",
        },
        {
          question: "Is laparoscopic surgery suitable for every patient?",
          answer:
            "Not every patient or condition is suitable for laparoscopic surgery. The recommended surgical approach depends on the diagnosis, medical history, condition of the patient and the treating gynaecologist's assessment.",
        },
      ],
    },
  },
];

export const getServices = () => {
  return services.map(({ id, slug, card }) => ({
    id,
    slug,
    ...card,
  }));
};

export const getServicesNav = () => {
  return services.map(({ id, slug, nav }) => ({
    id,
    slug,
    ...nav,
  }));
};

export const getServiceDetails = (idOrSlug) => {
  const service = services.find(
    ({ id, slug }) => id === idOrSlug || slug === idOrSlug,
  );

  if (!service) return null;

  return {
    id: service.id,
    slug: service.slug,
    title: service.title,
    ...service.details,
  };
};
