import { Baby, HeartPulse, Smile } from "lucide-react";

/* ------------------------------------------------------------------ */
/* FAQ content, kept apart from the UI so it is easy to edit.          */
/*                                                                     */
/* To add a category: add an object with a unique `key`.               */
/* To add a question: add { question, answer: [paragraph, ...] }.      */
/* `answer` is an array so every paragraph renders as its own block.   */
/*                                                                     */
/* NOTE: apart from the first question, the answers below are general  */
/* placeholders. Have your doctors review and adapt every answer       */
/* before publishing.                                                  */
/* ------------------------------------------------------------------ */
export const FAQS = [
  {
    key: "pregnancy",
    label: "Pregnancy FAQs",
    short: "Pregnancy",
    intro: "Guidance for every stage of pregnancy, from your first visit to delivery.",
    icon: HeartPulse,
    items: [
      {
        question: "What should I do during pregnancy to stay healthy?",
        answer: [
          "Pregnancy is a time when regular medical care, good nutrition and healthy daily habits can support the health of both mother and baby.",
          "Attend your scheduled antenatal appointments so your obstetrician can monitor your health, blood pressure, baby's growth and other important pregnancy parameters. Eat a varied and nutritious diet, drink adequate fluids, get enough rest and stay physically active when your pregnancy allows it.",
          "Your doctor may prescribe supplements such as folic acid, iron, calcium or vitamin D depending on your individual needs. Avoid smoking, alcohol and recreational drugs, and do not start or stop medicines or supplements without discussing them with your doctor.",
          "Every pregnancy is different, so your obstetrician may recommend additional precautions or investigations based on your medical history and pregnancy.",
        ],
      },
      {
        question: "How often will I need antenatal check-ups?",
        answer: [
          "The schedule depends on your health and the course of your pregnancy. Many women are seen about once a month in the first two trimesters, then every two weeks and later every week as the due date gets closer.",
          "If you have a higher-risk pregnancy, for example high blood pressure, diabetes or twins, your obstetrician may ask you to come more often. Your doctor will set the schedule that is right for you.",
        ],
      },
      {
        question: "Which scans and tests will I have during pregnancy?",
        answer: [
          "Most pregnancies include blood and urine tests, an early ultrasound to confirm the due date, a detailed anomaly scan at around 18 to 22 weeks, and a test for gestational diabetes in the second or early third trimester.",
          "Additional growth scans or screening tests may be advised depending on your age, medical history and how your pregnancy is progressing. Your obstetrician will explain what each test is for and when it is best done.",
        ],
      },
      {
        question: "Is it safe to exercise during pregnancy?",
        answer: [
          "For most healthy pregnancies, regular gentle activity such as walking, swimming and prenatal yoga is safe and can help with energy, sleep, mood and recovery after birth.",
          "Avoid activities with a risk of falls or impact, and avoid overheating or exercising to exhaustion. Stop and contact your doctor if you feel pain, dizziness, shortness of breath, bleeding or leaking fluid. Check with your obstetrician before starting any new exercise.",
        ],
      },
      {
        question: "Which symptoms mean I should call my doctor or come to the hospital straight away?",
        answer: [
          "Seek medical help right away if you have heavy vaginal bleeding, severe or constant abdominal pain, leaking of fluid, regular contractions before 37 weeks, a fever, or if your baby is moving much less than usual.",
          "Also call urgently for a severe headache, blurred vision, sudden swelling of the face or hands, or vomiting that does not stop. Our emergency team is available 24/7, so please do not wait if you are worried.",
        ],
      },
    ],
  },
  {
    key: "newborn",
    label: "Newborn FAQs",
    short: "Newborn",
    intro: "Feeding, sleep and everyday care for the first weeks of your baby's life.",
    icon: Baby,
    items: [
      {
        question: "How often should I feed my newborn?",
        answer: [
          "Most newborns feed about 8 to 12 times in 24 hours, usually every two to three hours, and should be fed whenever they show hunger cues such as stirring, sucking on their hands or turning towards the breast.",
          "Exclusive breastfeeding is recommended for the first six months unless your doctor advises otherwise. If feeding feels difficult or painful, our doctors and nurses can help you with positioning, latch and milk supply.",
        ],
      },
      {
        question: "How do I know my baby is getting enough milk?",
        answer: [
          "Good signs include a baby who feeds well and seems settled after feeds, regular soft stools, and plenty of wet diapers. By the end of the first week, most babies have at least six wet diapers a day.",
          "Babies often lose a little weight in the first days and then regain it. Your pediatrician will track your baby's weight at check-ups. Contact us if your baby is very sleepy, refuses feeds or has fewer wet diapers than expected.",
        ],
      },
      {
        question: "How much should a newborn sleep, and how can I keep sleep safe?",
        answer: [
          "Newborns sleep about 14 to 17 hours a day, in short stretches of a few hours, and wake often to feed. This is normal.",
          "For safe sleep, place your baby on their back on a firm, flat surface in their own cot or bassinet, with no pillows, loose blankets or soft toys. Keep the room comfortably cool, and avoid sharing a bed with your baby.",
        ],
      },
      {
        question: "How do I care for my baby's umbilical cord stump?",
        answer: [
          "Keep the stump clean and dry, and fold the front of the diaper down so that it stays exposed to air. It usually dries and falls off within one to three weeks.",
          "Do not apply powders, creams or other substances unless your doctor advises it. Call us if you see redness spreading on the skin, swelling, pus, a bad smell, or if your baby develops a fever.",
        ],
      },
      {
        question: "When should I call the doctor about my newborn?",
        answer: [
          "Call right away if your baby has a temperature of 38°C (100.4°F) or higher, is breathing fast or with difficulty, looks blue or very pale, is hard to wake, or is feeding poorly.",
          "Also contact us if the yellow colour of the skin or eyes is increasing, your baby is vomiting repeatedly, or you notice fewer wet diapers. If you are ever unsure, it is always fine to call. Our team is here 24/7.",
        ],
      },
    ],
  },
  {
    key: "child-care",
    label: "Baby & Child Care FAQs",
    short: "Baby & Child",
    intro: "Growth, nutrition, vaccines and everyday care as your child grows.",
    icon: Smile,
    items: [
      {
        question: "Which vaccines does my child need and when?",
        answer: [
          "Children receive vaccines at set ages from birth through childhood, following the national immunisation schedule. These protect against serious illnesses such as tuberculosis, hepatitis B, polio, diphtheria, tetanus, whooping cough and measles.",
          "Our pediatricians will give you a vaccination record and remind you when the next dose is due. If your child has missed a dose, do not worry. Bring the record and we will help you catch up safely.",
        ],
      },
      {
        question: "When can I start giving my baby solid foods?",
        answer: [
          "Most babies are ready around six months of age, when they can sit with support, show interest in food and no longer push food out with their tongue. Breast milk or formula remains the main source of nutrition at first.",
          "Start with soft, mashed or pureed foods, one new food at a time. Avoid honey before 12 months, added salt and sugar, and hard or round foods that can cause choking. Ask your pediatrician when and how to introduce common allergy-causing foods such as egg, peanut and fish.",
        ],
      },
      {
        question: "How can I tell if my child is developing normally?",
        answer: [
          "Every child grows at their own pace, but there are typical milestones. For example, many babies smile socially by about two months, sit by six months, say their first words around their first birthday and walk somewhere between 12 and 18 months.",
          "Regular check-ups let your pediatrician track growth and development. Talk to us if your child does not respond to sounds, is not babbling or using gestures by 12 months, or has lost skills they once had.",
        ],
      },
      {
        question: "What should I do when my child has a fever?",
        answer: [
          "A temperature of 38°C (100.4°F) or higher is a fever. Keep your child comfortable in light clothing, offer plenty of fluids and let them rest.",
          "Give fever medicine only at the dose your doctor recommends for your child's age and weight, and never give aspirin to children. Seek medical care urgently if your baby is under three months, the fever lasts more than three days, or your child is very drowsy, has trouble breathing, a stiff neck, a seizure or signs of dehydration.",
        ],
      },
      {
        question: "How can I keep my child's teeth healthy?",
        answer: [
          "Start by wiping your baby's gums with a clean, soft cloth. Once the first tooth appears, brush it twice a day with a soft brush and a tiny smear of fluoride toothpaste, as advised by your dentist or pediatrician.",
          "Avoid putting your baby to bed with a bottle, limit sugary drinks and snacks, and plan a first dental visit by your child's first birthday.",
        ],
      },
    ],
  },
];