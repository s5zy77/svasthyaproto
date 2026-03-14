const minsAgo = n => new Date(Date.now() - n * 60000).toISOString();

const DUMMY_POSTS = [
  // ── #headache posts ──
  {id:101,userId:3,userName:"Rahul Verma",avatar:"RV",role:"patient",type:"patient_post",
   content:"Woke up with a splitting headache on the left side. Feels like pressure behind my eye. Light is making it worse. Is this a migraine? Any home remedies that actually work? #headache #migraine",
   tags:["#headache","#migraine"],likes:34,liked:false,saved:false,createdAt:minsAgo(120),comments:[]},
  {id:102,userId:1,userName:"Dr. Priya Sharma",avatar:"PS",role:"doctor",type:"doctor_post",specialty:"General Physician",
   content:"🧠 Tension Headache Self-Care Tips\n\n1. Apply a cold or warm compress to forehead\n2. Practice deep breathing (4-7-8 technique)\n3. Stay hydrated — dehydration is a top trigger\n4. Avoid screens for 20 minutes\n5. Gentle neck stretches\n\n⚠️ See a doctor if headache is sudden & severe, or comes with vision changes. #headache #wellness",
   tags:["#headache"],likes:89,liked:false,saved:false,createdAt:minsAgo(600),comments:[]},
  {id:103,userId:4,userName:"Sneha Kapoor",avatar:"SK",role:"patient",type:"patient_post",
   content:"Daily headaches for the past 2 weeks 😩 Usually starts in the afternoon. I work on a laptop 10+ hours. Could it be eye strain? Should I see a neurologist or an eye doctor first? #headache",
   tags:["#headache"],likes:27,liked:false,saved:false,createdAt:minsAgo(900),comments:[]},
  {id:104,userId:2,userName:"Dr. Arjun Mehta",avatar:"AM",role:"doctor",type:"doctor_post",specialty:"Neurologist",
   content:"📋 When to get a CT/MRI for headaches:\n\n→ Sudden thunderclap headache\n→ Worst headache of your life\n→ Headache + fever + stiff neck\n→ Progressive worsening over weeks\n→ Headache after head injury\n→ New onset after age 50\n\nMost headaches are benign but these red flags need imaging. #headache #neurology",
   tags:["#headache"],likes:145,liked:false,saved:true,createdAt:minsAgo(2000),comments:[]},
  {id:105,userId:3,userName:"Rahul Verma",avatar:"RV",role:"patient",type:"patient_post",
   content:"My 8-year-old daughter complains of headache every evening after school. She doesn't have fever. Teacher says she squints at the board. Could she need glasses? #headache #parenting",
   tags:["#headache"],likes:19,liked:false,saved:false,createdAt:minsAgo(3200),comments:[]},

  // ── #fever posts ──
  {id:201,userId:4,userName:"Sneha Kapoor",avatar:"SK",role:"patient",type:"patient_post",
   content:"Fever hitting 102°F since last night. Body aches all over and chills. Took paracetamol but it comes back every 6 hours. No cough or cold symptoms though. Should I get a blood test done? #fever",
   tags:["#fever"],likes:31,liked:false,saved:false,createdAt:minsAgo(180),comments:[]},
  {id:202,userId:1,userName:"Dr. Priya Sharma",avatar:"PS",role:"doctor",type:"doctor_post",specialty:"General Physician",
   content:"🌡️ Fever Management Guide\n\nDO:\n✅ Stay hydrated (water, ORS, coconut water)\n✅ Rest well\n✅ Use paracetamol (15mg/kg for children)\n✅ Lukewarm sponging\n\nDON'T:\n❌ Use ice-cold water for sponging\n❌ Take aspirin if you suspect dengue\n❌ Self-prescribe antibiotics\n❌ Ignore fever >5 days\n\n#fever #health",
   tags:["#fever"],likes:210,liked:false,saved:true,createdAt:minsAgo(1000),comments:[]},
  {id:203,userId:3,userName:"Rahul Verma",avatar:"RV",role:"patient",type:"patient_post",
   content:"Low-grade fever (99.5°F) for 10 days now. Feeling tired all the time. Blood reports show slightly elevated ESR. Doctor said could be viral but I'm worried. Anyone else had this? #fever #fatigue",
   tags:["#fever"],likes:42,liked:false,saved:false,createdAt:minsAgo(4000),comments:[]},
  {id:204,userId:4,userName:"Sneha Kapoor",avatar:"SK",role:"patient",type:"patient_post",
   content:"Post-vaccine fever — my arm is sore and I have 100°F temp after getting my booster shot yesterday. Doctor said it's normal. But how long does it usually last? #fever #vaccination",
   tags:["#fever"],likes:16,liked:false,saved:false,createdAt:minsAgo(5500),comments:[]},
  {id:205,userId:2,userName:"Dr. Arjun Mehta",avatar:"AM",role:"doctor",type:"doctor_post",specialty:"Neurologist",
   content:"🔬 Fever of Unknown Origin (FUO):\n\nDefined as fever >38.3°C for >3 weeks without diagnosis.\n\nCommon causes:\n• Infections (TB, endocarditis, abscess)\n• Autoimmune (lupus, adult Still's)\n• Malignancy (lymphoma)\n\nWorkup: CBC, ESR, CRP, blood cultures, CT chest+abdomen. Don't ignore prolonged fevers. #fever #medicine",
   tags:["#fever"],likes:167,liked:false,saved:false,createdAt:minsAgo(7200),comments:[]},

  // ── #diabetes posts ──
  {id:301,userId:3,userName:"Rahul Verma",avatar:"RV",role:"patient",type:"patient_post",
   content:"Recently diagnosed with Type 2 diabetes. My fasting sugar was 180 mg/dL. Doctor started me on Metformin. Really scared about long-term complications. How do you all manage it? #diabetes",
   tags:["#diabetes"],likes:56,liked:false,saved:true,createdAt:minsAgo(240),comments:[]},
  {id:302,userId:1,userName:"Dr. Priya Sharma",avatar:"PS",role:"doctor",type:"doctor_post",specialty:"General Physician",
   content:"🍽️ Diabetes Diet — What Actually Works:\n\n✅ Eat more: leafy greens, whole grains, lean protein, nuts\n✅ Portion control is key, not starvation\n✅ Chromium-rich foods (broccoli, barley)\n✅ Cinnamon may help insulin sensitivity\n\n❌ Avoid: white rice in excess, sugary drinks, fruit juices, maida products\n\nHbA1c target: below 7% for most adults. #diabetes #nutrition",
   tags:["#diabetes","#nutrition"],likes:234,liked:false,saved:true,createdAt:minsAgo(1500),comments:[]},
  {id:303,userId:4,userName:"Sneha Kapoor",avatar:"SK",role:"patient",type:"patient_post",
   content:"My father (62) has been diabetic for 15 years. Now his feet feel numb and tingly. Is this diabetic neuropathy? What can we do to prevent it from getting worse? #diabetes #neuropathy",
   tags:["#diabetes"],likes:38,liked:false,saved:false,createdAt:minsAgo(3500),comments:[]},
  {id:304,userId:2,userName:"Dr. Arjun Mehta",avatar:"AM",role:"doctor",type:"doctor_post",specialty:"Neurologist",
   content:"🧪 Diabetic Neuropathy — Early Signs:\n\n• Tingling, burning, or numbness in feet/hands\n• Sharp pains, especially at night\n• Loss of balance\n• Muscle weakness\n\nPrevention:\n→ Strict sugar control (HbA1c <7%)\n→ Daily foot inspection\n→ Vitamin B12 supplementation\n→ Regular nerve conduction studies\n\n#diabetes #neuropathy #neurology",
   tags:["#diabetes"],likes:178,liked:false,saved:true,createdAt:minsAgo(6000),comments:[]},
  {id:305,userId:3,userName:"Rahul Verma",avatar:"RV",role:"patient",type:"patient_post",
   content:"Can someone explain the difference between Type 1 and Type 2 diabetes in simple terms? My cousin's kid (age 7) was just diagnosed and the family is confused. #diabetes #health",
   tags:["#diabetes"],likes:44,liked:false,saved:false,createdAt:minsAgo(8600),comments:[]},

  // ── #mentalhealth posts ──
  {id:401,userId:4,userName:"Sneha Kapoor",avatar:"SK",role:"patient",type:"patient_post",
   content:"Having really bad anxiety attacks at work lately. Heart races, palms get sweaty, feel like I can't breathe. Started avoiding meetings because of it. How do you cope? #mentalhealth #anxiety",
   tags:["#mentalhealth","#anxiety"],likes:67,liked:false,saved:false,createdAt:minsAgo(350),comments:[]},
  {id:402,userId:1,userName:"Dr. Priya Sharma",avatar:"PS",role:"doctor",type:"doctor_post",specialty:"General Physician",
   content:"💚 5-4-3-2-1 Grounding Technique for Anxiety:\n\nWhen you feel overwhelmed, notice:\n• 5 things you can SEE\n• 4 things you can TOUCH\n• 3 things you can HEAR\n• 2 things you can SMELL\n• 1 thing you can TASTE\n\nThis interrupts the anxiety loop. Practice daily, not just during attacks. Therapy + medication works best for clinical anxiety. #mentalhealth #anxiety",
   tags:["#mentalhealth","#anxiety"],likes:301,liked:false,saved:true,createdAt:minsAgo(2200),comments:[]},
  {id:403,userId:3,userName:"Rahul Verma",avatar:"RV",role:"patient",type:"patient_post",
   content:"Feeling burned out for months. No energy, no motivation, sleeping 10+ hours but still tired. Everything feels pointless. Is this depression or just burnout? Where do I even start? #mentalhealth #sleep",
   tags:["#mentalhealth","#sleep"],likes:83,liked:false,saved:false,createdAt:minsAgo(5000),comments:[]},

  // ── #allergy & #skinproblem posts ──
  {id:501,userId:4,userName:"Sneha Kapoor",avatar:"SK",role:"patient",type:"patient_post",
   content:"Every monsoon season I get terrible sneezing fits, watery eyes, and nasal congestion. It lasts for weeks. Antihistamines help but make me drowsy. Any non-drowsy alternatives? #allergy",
   tags:["#allergy"],likes:29,liked:false,saved:false,createdAt:minsAgo(400),comments:[]},
  {id:502,userId:1,userName:"Dr. Priya Sharma",avatar:"PS",role:"doctor",type:"doctor_post",specialty:"General Physician",
   content:"🤧 Seasonal Allergies vs Common Cold:\n\nAllergy signs:\n• Lasts weeks/months (not 7-10 days)\n• Itchy eyes, nose, throat\n• Clear watery discharge\n• No fever\n• Worse outdoors\n\nCold signs:\n• Lasts 7-10 days\n• Thick yellowish mucus\n• Low fever possible\n• Body aches\n\nTreat allergies with: Cetirizine/Fexofenadine (non-drowsy) + nasal steroid spray. #allergy #skinproblem",
   tags:["#allergy","#skinproblem"],likes:143,liked:false,saved:false,createdAt:minsAgo(3000),comments:[]},

  // ── #hearthealth posts ──
  {id:601,userId:3,userName:"Rahul Verma",avatar:"RV",role:"patient",type:"patient_post",
   content:"My resting heart rate has been around 95-100 bpm lately. I'm not very active and drink 3-4 cups of coffee daily. Is this concerning? Normal range is 60-100 right? #hearthealth",
   tags:["#hearthealth"],likes:37,liked:false,saved:false,createdAt:minsAgo(500),comments:[]},
  {id:602,userId:2,userName:"Dr. Arjun Mehta",avatar:"AM",role:"doctor",type:"doctor_post",specialty:"Neurologist",
   content:"❤️ Heart Health Numbers Everyone Should Know:\n\n• Resting HR: 60-100 bpm (lower is generally better)\n• BP: <120/80 mmHg ideal\n• Total Cholesterol: <200 mg/dL\n• LDL: <100 mg/dL\n• HDL: >40 (men), >50 (women)\n• Fasting Sugar: <100 mg/dL\n\nGet these checked annually after age 30. Prevention > Treatment. #hearthealth #diabetes",
   tags:["#hearthealth","#diabetes"],likes:256,liked:false,saved:true,createdAt:minsAgo(4500),comments:[]},

  // ── #nutrition & #sleep posts ──
  {id:701,userId:1,userName:"Dr. Priya Sharma",avatar:"PS",role:"doctor",type:"doctor_post",specialty:"General Physician",
   content:"🥗 Vitamin D Deficiency — The Silent Epidemic:\n\n80% of Indians are Vitamin D deficient!\n\nSymptoms:\n• Fatigue, body pain\n• Weak bones, frequent fractures\n• Hair loss\n• Depression, mood changes\n\nFix:\n→ 15 min morning sunlight daily\n→ Supplement: 60,000 IU weekly (with doctor advice)\n→ Foods: egg yolks, fatty fish, mushrooms\n\n#nutrition #health",
   tags:["#nutrition"],likes:312,liked:false,saved:true,createdAt:minsAgo(6500),comments:[]},
  {id:702,userId:4,userName:"Sneha Kapoor",avatar:"SK",role:"patient",type:"patient_post",
   content:"I can never fall asleep before 2 AM even when I'm tired. Then I struggle to wake up at 7 for work. Been like this for years. Tried melatonin, didn't help much. What else can I try? #sleep #mentalhealth",
   tags:["#sleep","#mentalhealth"],likes:51,liked:false,saved:false,createdAt:minsAgo(7800),comments:[]},

  // ── #dengue posts ──
  {id:801,userId:4,userName:"Sneha Kapoor",avatar:"SK",role:"patient",type:"patient_post",
   content:"My neighbor's entire family got dengue last week. Now I have high fever and body ache. Should I get NS1 antigen test or wait? When is the right time to test? #dengue #fever",
   tags:["#dengue","#fever"],likes:46,liked:false,saved:false,createdAt:minsAgo(290),comments:[]},
  {id:802,userId:1,userName:"Dr. Priya Sharma",avatar:"PS",role:"doctor",type:"doctor_post",specialty:"General Physician",
   content:"🦟 Dengue Testing Timeline:\n\n• Day 1-5 of fever → NS1 Antigen test (most accurate)\n• Day 5+ → IgM antibody test\n• Daily: Platelet count + Hematocrit\n\n🚨 Hospital admission criteria:\n→ Platelets <100,000\n→ Severe abdominal pain\n→ Persistent vomiting\n→ Bleeding from any site\n→ Difficulty breathing\n\nDO NOT take Ibuprofen or Aspirin! #dengue #fever",
   tags:["#dengue","#fever"],likes:289,liked:false,saved:true,createdAt:minsAgo(1800),comments:[]},
];

// Symptom reports database (for doctor dashboard + patient history)
const SYMPTOM_REPORTS = [
  {id:1,patientId:3,patientName:"Rahul Verma",age:34,city:"Kolkata",symptoms:["fever","cough"],duration:"3 days",severity:"moderate",
   aiSummary:"Patient reports fever and cough for 3 days. Possible respiratory infection. Doctor should evaluate for flu or viral infection.",
   triage:"medium",createdAt:minsAgo(180),doctorNotes:null,doctorId:null},
  {id:2,patientId:4,patientName:"Sneha Kapoor",age:28,city:"Mumbai",symptoms:["headache","nausea","dizziness"],duration:"1 week",severity:"high",
   aiSummary:"Patient reports chronic headache with nausea and dizziness for 1 week. Possible migraine or vestibular disorder. Recommend neurological evaluation.",
   triage:"high",createdAt:minsAgo(600),doctorNotes:"Prescribed Sumatriptan 50mg. Follow up in 1 week.",doctorId:1},
  {id:3,patientId:3,patientName:"Rahul Verma",age:34,city:"Kolkata",symptoms:["chest pain","breathing difficulty"],duration:"2 days",severity:"high",
   aiSummary:"Patient reports chest pain with breathing difficulty for 2 days. URGENT: Rule out cardiac event. Immediate ECG and troponin recommended.",
   triage:"high",createdAt:minsAgo(1440),doctorNotes:"ECG normal. Likely musculoskeletal. Advised rest and ibuprofen.",doctorId:2},
  {id:4,patientId:4,patientName:"Sneha Kapoor",age:28,city:"Mumbai",symptoms:["rash","itching"],duration:"3 days",severity:"low",
   aiSummary:"Patient reports skin rash with itching for 3 days. Likely allergic dermatitis. Antihistamine and topical steroid recommended.",
   triage:"low",createdAt:minsAgo(4320),doctorNotes:null,doctorId:null},
  {id:5,patientId:3,patientName:"Rahul Verma",age:34,city:"Delhi",symptoms:["fever","joint pain","fatigue"],duration:"5 days",severity:"high",
   aiSummary:"Patient reports fever with joint pain and fatigue for 5 days. Consider dengue, chikungunya, or viral arthropathy. CBC and dengue serology recommended.",
   triage:"high",createdAt:minsAgo(10080),doctorNotes:"Dengue NS1 positive. Platelet count 120k. Advised hydration and rest. Monitor platelets daily.",doctorId:1},
  {id:6,patientId:4,patientName:"Sneha Kapoor",age:28,city:"Chennai",symptoms:["stomach pain","nausea"],duration:"2 days",severity:"moderate",
   aiSummary:"Patient reports stomach pain with nausea for 2 days. Possible gastritis or food-related illness. H. pylori test recommended if recurring.",
   triage:"medium",createdAt:minsAgo(20160),doctorNotes:null,doctorId:null},
  {id:7,patientId:3,patientName:"Rahul Verma",age:34,city:"Kolkata",symptoms:["insomnia","anxiety","fatigue"],duration:"2 weeks",severity:"moderate",
   aiSummary:"Patient reports insomnia with anxiety and fatigue for 2 weeks. Possible anxiety disorder or depression. Mental health screening recommended.",
   triage:"medium",createdAt:minsAgo(30000),doctorNotes:"Referred to psychiatrist. Started on low-dose SSRI.",doctorId:1},
];

export { DUMMY_POSTS, SYMPTOM_REPORTS };
