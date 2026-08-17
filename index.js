
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const translations = {
  en: {
    brand_sub:"Bhandup West, Mumbai",
    nav_about:"About Us", nav_services:"Services", nav_gallery:"Gallery", nav_blog:"Blog", nav_testimonials:"Testimonials", nav_contact:"Contact", nav_call:"Call",
    hero_eyebrow:"Bhandup West, Mumbai · 31+ years of trusted care",
    hero_title:"Confident skin. Healthy hair. Real, lasting results.",
    hero_sub:"Dr. Pratima Tupe is a cosmetologist, trichologist and nutritionist who has helped thousands of patients across Mumbai with personalised skin, hair, laser and slimming treatments.",
    hero_cta_call:"Call the Clinic", hero_cta_whatsapp:"Message on WhatsApp",
    stat1_label:"Years of Care", stat2_label:"Patient Rating", stat3_label:"Patients Treated",
    doctors_eyebrow:"Our Team", doctors_title:"Two clinics, one family of care.",
    about_eyebrow:"Dr. Pratima Tupe &amp; Dr. Sambhaji Tupe",
    about_title:"31 years of giving Mumbai its confidence back.",
    about_p1:"Dr. Pratima Tupe and Dr. Sambhaji Tupe are the founders of Dr. Tupe's Skin, Hair, Laser &amp; Slimming Clinic in Bhandup West. As a cosmetologist, trichologist and nutritionist, Dr. Pratima Tupe takes a comprehensive approach — treating not just the skin or scalp, but the diet, lifestyle and root cause behind every concern.",
    about_p2:"Over 31 years, she has treated thousands of patients for everything from acne, pigmentation and fungal infections to hair loss, dandruff and weight management — earning a loyal, largely word-of-mouth patient base and a 4.9★ rating across 1,600+ reviews.",
    about_quote:"\"My philosophy is simple — understand the root cause, treat with care, and stay with the patient until they see real results.\"",
    trust1_title:"Qualified &amp; Experienced", trust1_desc:"Cosmetologist, Trichologist &amp; Nutritionist, 31+ years in practice",
    trust2_title:"Hygienic &amp; Modern", trust2_desc:"Clean, well-equipped clinic with the latest treatment protocols",
    trust3_title:"Personalised Plans", trust3_desc:"Every treatment is tailored to your skin, hair &amp; health history",
    trust4_title:"Walk-ins Welcome", trust4_desc:"No appointment needed — visit us during clinic hours",
    press_eyebrow:"In The News", press_title:"Press &amp; recognition.",
    press_sub:"Featured in Mid-Day's Top 10 Emerging &amp; Promising Women Entrepreneurs of 2023, and recognised for our work in skin &amp; hair care.",
    services_eyebrow:"What We Treat", services_title:"Skin, Hair, Laser &amp; Slimming — under one roof.",
    services_sub:"Every treatment plan starts with a consultation to understand your specific concern before any procedure is recommended.",
    tab_skin:"Skin", tab_hair:"Hair", tab_laser:"Laser", tab_slim:"Slimming",
    gallery_hero_eyebrow:"Gallery", gallery_hero_title:"See the space, the treatments, and real results.",
    gallery_hero_sub:"A closer look at our clinic, our team at work, and the latest photos &amp; videos from Instagram — ozone therapy, carbon laser and more.",
    gallery_insta_eyebrow:"Live from Instagram", gallery_insta_title:"Straight from our feed.",
    gallery_insta_intro:"Follow <a href=\"https://www.instagram.com/dr_tupe_skin_and_hair_clinic/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--pine); font-weight: 600\">@dr_tupe_skin_and_hair_clinic</a> for daily treatment videos and results.",
    gallery_space_eyebrow:"Inside the Clinic", gallery_space_title:"A look at our space.",
    why_eyebrow:"Why Patients Choose Us", why_title:"Care that goes beyond the treatment room.",
    why1:"Years of clinical experience", why2:"Patients treated", why3:"Personalised treatment plans", why4:"Our Team",
    testi_eyebrow:"Real Patient Experiences", testi_title:"Stories shared by our patients.",
    testi_intro:"Read about the experiences of patients who visited Dr. Tupe Skin and Hair Clinic for skin, hair and laser treatments.",
    testi1:"“I had struggled with hair growth since 2020 and saw no improvement after trying homeopathy for around one and a half years. After five PRP sessions, along with medicines and diet guidance, my hair fall reduced and I began seeing new growth.”",
    testi2:"“I had a fungal infection around my eyes, nose and ears. Dr. Tupe listened carefully and treated the condition with great care. Within about ten days, the infection had cleared. I am very thankful for the treatment.”",
    testi3:"“I initially visited the clinic for pigmentation. I was so pleased with the treatment and recommended products that, after seeing the improvement, I decided to begin treatment for my hair as well.”",
    testi4:"“I visited with dandruff and a scaly scalp. Dr. Tupe was kind, explained the condition clearly and suggested the right treatment. The scaling has reduced, and I am happy with my progress while continuing the treatment.”",
    testi5:"“I chose laser hair reduction for my underarms. The procedure was comfortable, the doctor and staff were supportive, and I am very satisfied with how smooth the treated area feels.”",
    testi6:"“My mother had a painful, infected wart on her foot. Dr. Tupe removed it gently and carefully without causing her pain. We appreciated her friendly, reassuring approach throughout the treatment.”",
    testi_disclaimer:"Reviews reflect individual patient experiences. Treatment suitability, timelines and results may vary from person to person.",
    testi_view_more:"View more patient reviews on Google",
    faq_eyebrow:"Good to Know", faq_title:"Frequently asked questions.",
    faq_q0:"What are the consultation fees?", faq_a0:"The initial consultation fee is ₹500. Follow-up consultations are charged at ₹300.",
    faq_q1:"Do I need an appointment?", faq_a1:"No — walk-ins are welcome during clinic hours. For specific treatments, calling ahead helps us plan your visit better.",
    faq_q2:"Is the first visit a consultation only?", faq_a2:"Yes, Dr. Tupe examines your concern first and recommends a treatment plan — nothing is done without your understanding and consent.",
    faq_q3:"How many sessions will I need?", faq_a3:"This varies by treatment and individual case — PRP and GFC typically need 3–5 sittings, discussed clearly during consultation.",
    faq_q4:"Do you offer diet and nutrition guidance?", faq_a4:"Yes, Dr. Tupe is also a qualified nutritionist and includes diet guidance as part of skin, hair and weight management plans.",
    contact_walkin_badge:"🚶 Walk-ins welcome — no appointment necessary",
    contact_eyebrow:"Visit Either of Our Clinics", contact_title:"We'd love to see you.",
    contact_addr_label:"Address", contact_phone_label:"Phone / WhatsApp", contact_email_label:"Email", contact_hours_label:"Clinic Hours",
    clinic1_title:"Clinic 1 — Dr. Pratima Tupe", clinic2_title:"Clinic 2 — Dr. Sambhaji Tupe",
    days_mon_sat:"Monday – Saturday", days_sun:"Sunday",
    contact_view_maps:"📍 View on Google Maps",
    footer_tagline:"Comprehensive skin, hair, laser and slimming care — from a doctor who treats the root cause.",
    footer_follow:"Find Us Online", footer_rights:"© 2026 Dr. Tupe's Skin &amp; Hair Clinic. All rights reserved."
  },
  hi: {
    brand_sub:"भांडुप वेस्ट, मुंबई",
    nav_about:"परिचय", nav_services:"सेवाएं", nav_gallery:"गैलरी", nav_blog:"ब्लॉग", nav_testimonials:"प्रशंसापत्र", nav_contact:"संपर्क करें", nav_call:"कॉल करें",
    hero_eyebrow:"भांडुप वेस्ट, मुंबई · 31+ वर्षों का भरोसेमंद अनुभव",
    hero_title:"निखरी त्वचा। स्वस्थ बाल। असली और टिकाऊ परिणाम।",
    hero_sub:"डॉ. प्रतिमा तुपे एक कॉस्मेटोलॉजिस्ट, ट्राइकोलॉजिस्ट और न्यूट्रिशनिस्ट हैं, जिन्होंने मुंबई भर में हज़ारों मरीज़ों की त्वचा, बाल, लेज़र और स्लिमिंग संबंधी समस्याओं में मदद की है।",
    hero_cta_call:"क्लिनिक को कॉल करें", hero_cta_whatsapp:"व्हाट्सएप पर संदेश भेजें",
    stat1_label:"वर्षों की देखभाल", stat2_label:"मरीज़ रेटिंग", stat3_label:"इलाज किए गए मरीज़",
    doctors_eyebrow:"हमारी टीम", doctors_title:"दो क्लिनिक, देखभाल का एक ही परिवार।",
    about_eyebrow:"डॉ. प्रतिमा तुपे और डॉ. सांभाजी तुपे",
    about_title:"31 वर्षों से मुंबई को आत्मविश्वास लौटाते हुए।",
    about_p1:"डॉ. प्रतिमा तुपे और डॉ. सांभाजी तुपे, भांडुप वेस्ट स्थित 'डॉ. तुपे स्किन, हेयर, लेज़र एंड स्लिमिंग क्लिनिक' के संस्थापक हैं। एक कॉस्मेटोलॉजिस्ट, ट्राइकोलॉजिस्ट एवं न्यूट्रिशनिस्ट होने के नाते, डॉ. प्रतिमा तुपे केवल त्वचा या स्कैल्प का नहीं बल्कि आहार, जीवनशैली एवं हर समस्या की जड़ का भी उपचार करती हैं।",
    about_p2:"31 वर्षों में उन्होंने मुहांसों, पिगमेंटेशन, फंगल इन्फेक्शन से लेकर बाल झड़ना, डैंड्रफ़ एवं वज़न प्रबंधन तक हज़ारों मरीज़ों का इलाज किया है — जिससे उन्हें 1,600+ समीक्षाओं में 4.9★ की रेटिंग और एक वफ़ादार, ज़्यादातर वर्ड-ऑफ़-माउथ से बना मरीज़ आधार मिला है।",
    about_quote:"\"मेरा दर्शन सरल है — समस्या की जड़ को समझें, देखभाल के साथ इलाज करें, और जब तक असली परिणाम न दिखें तब तक मरीज़ के साथ बने रहें।\"",
    trust1_title:"योग्य एवं अनुभवी", trust1_desc:"कॉस्मेटोलॉजिस्ट, ट्राइकोलॉजिस्ट एवं न्यूट्रिशनिस्ट, 31+ वर्षों का अनुभव",
    trust2_title:"स्वच्छ एवं आधुनिक", trust2_desc:"नवीनतम उपचार पद्धतियों से युक्त साफ़-सुथरा क्लिनिक",
    trust3_title:"व्यक्तिगत उपचार योजना", trust3_desc:"हर उपचार आपकी त्वचा, बाल एवं स्वास्थ्य इतिहास के अनुसार तैयार किया जाता है",
    trust4_title:"बिना अपॉइंटमेंट स्वागत", trust4_desc:"अपॉइंटमेंट की ज़रूरत नहीं — क्लिनिक समय के दौरान आएं",
    press_eyebrow:"समाचारों में", press_title:"प्रेस एवं सम्मान।",
    press_sub:"मिड-डे की 2023 की टॉप 10 उभरती एवं होनहार महिला उद्यमियों की सूची में शामिल, और त्वचा एवं बाल देखभाल के क्षेत्र में हमारे काम के लिए सम्मानित।",
    services_eyebrow:"हमारी विशेषज्ञता", services_title:"त्वचा, बाल, लेज़र एवं स्लिमिंग — एक ही छत के नीचे।",
    services_sub:"हर उपचार योजना, किसी भी प्रक्रिया की सिफ़ारिश से पहले आपकी समस्या को समझने के लिए परामर्श से शुरू होती है।",
    tab_skin:"त्वचा", tab_hair:"बाल", tab_laser:"लेज़र", tab_slim:"स्लिमिंग",
    gallery_hero_eyebrow:"गैलरी", gallery_hero_title:"हमारा स्थान, उपचार और असली परिणाम देखें।",
    gallery_hero_sub:"हमारे क्लिनिक, हमारी टीम के काम करने के तरीके और इंस्टाग्राम की नवीनतम तस्वीरों एवं वीडियो पर एक नज़दीकी नज़र — ओज़ोन थेरेपी, कार्बन लेज़र और भी बहुत कुछ।",
    gallery_insta_eyebrow:"इंस्टाग्राम से लाइव", gallery_insta_title:"सीधे हमारी फ़ीड से।",
    gallery_insta_intro:"रोज़ाना उपचार वीडियो एवं परिणामों के लिए <a href=\"https://www.instagram.com/dr_tupe_skin_and_hair_clinic/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--pine); font-weight: 600\">@dr_tupe_skin_and_hair_clinic</a> को फ़ॉलो करें।",
    gallery_space_eyebrow:"क्लिनिक के अंदर", gallery_space_title:"हमारे स्थान की एक झलक।",
    why_eyebrow:"मरीज़ हमें क्यों चुनते हैं", why_title:"देखभाल जो उपचार कक्ष से भी आगे जाती है।",
    why1:"वर्षों का चिकित्सकीय अनुभव", why2:"इलाज किए गए मरीज़", why3:"व्यक्तिगत उपचार योजनाएं", why4:"हमारी टीम",
    testi_eyebrow:"असली मरीज़ों के अनुभव", testi_title:"हमारे मरीज़ों की कहानियां।",
    testi_intro:"त्वचा, बाल एवं लेज़र उपचार के लिए डॉ. तुपे स्किन एंड हेयर क्लिनिक आए मरीज़ों के अनुभव पढ़ें।",
    testi1:"\"मैं 2020 से बालों की बढ़त को लेकर परेशान थी और डेढ़ साल तक होम्योपैथी आज़माने के बाद भी कोई सुधार नहीं दिखा। पीआरपी के पांच सेशन, दवाओं और आहार मार्गदर्शन के साथ, मेरे बाल झड़ना कम हुआ और नए बाल आने लगे।\"",
    testi2:"\"मुझे आंखों, नाक और कानों के आसपास फंगल इन्फेक्शन था। डॉ. तुपे ने ध्यान से मेरी बात सुनी और बहुत देखभाल से इलाज किया। लगभग दस दिनों में इन्फेक्शन ठीक हो गया। मैं इस इलाज के लिए बहुत आभारी हूं।\"",
    testi3:"\"मैं शुरुआत में पिगमेंटेशन के लिए क्लिनिक आई थी। इलाज और सुझाए गए उत्पादों से मैं इतनी संतुष्ट हुई कि सुधार देखने के बाद मैंने अपने बालों का इलाज भी शुरू करने का फ़ैसला किया।\"",
    testi4:"\"मैं डैंड्रफ़ और पपड़ीदार स्कैल्प की समस्या लेकर आई थी। डॉ. तुपे बहुत दयालु थीं, उन्होंने स्थिति स्पष्ट रूप से समझाई और सही इलाज सुझाया। पपड़ी कम हुई है और इलाज जारी रखते हुए मैं अपनी प्रगति से खुश हूं।\"",
    testi5:"\"मैंने अपनी अंडरआर्म्स के लिए लेज़र हेयर रिडक्शन चुना। प्रक्रिया आरामदायक थी, डॉक्टर और स्टाफ़ सहयोगी थे, और इलाज किए गए हिस्से की चिकनाई से मैं बहुत संतुष्ट हूं।\"",
    testi6:"\"मेरी मां के पैर में एक दर्दनाक, संक्रमित मस्सा था। डॉ. तुपे ने उसे बिना दर्द दिए, धीरे और सावधानी से हटाया। पूरे इलाज के दौरान उनके मित्रवत और भरोसेमंद व्यवहार की हमने सराहना की।\"",
    testi_disclaimer:"समीक्षाएं व्यक्तिगत मरीज़ों के अनुभवों को दर्शाती हैं। उपचार की उपयुक्तता, समयसीमा एवं परिणाम व्यक्ति के अनुसार भिन्न हो सकते हैं।",
    testi_view_more:"Google पर और मरीज़ समीक्षाएं देखें",
    faq_eyebrow:"जानना ज़रूरी है", faq_title:"अक्सर पूछे जाने वाले सवाल।",
    faq_q0:"परामर्श शुल्क कितना है?", faq_a0:"प्रारंभिक परामर्श शुल्क ₹500 है। फ़ॉलो-अप परामर्श के लिए ₹300 शुल्क लिया जाता है।",
    faq_q1:"क्या मुझे अपॉइंटमेंट चाहिए?", faq_a1:"नहीं — क्लिनिक समय के दौरान बिना अपॉइंटमेंट आ सकते हैं। विशेष उपचार के लिए पहले कॉल करना बेहतर रहेगा।",
    faq_q2:"क्या पहली विज़िट केवल परामर्श होती है?", faq_a2:"हां, डॉ. तुपे पहले आपकी समस्या की जांच करती हैं और फिर उपचार योजना सुझाती हैं — आपकी सहमति के बिना कुछ नहीं किया जाता।",
    faq_q3:"मुझे कितने सिटिंग्स की ज़रूरत होगी?", faq_a3:"यह उपचार एवं व्यक्तिगत स्थिति पर निर्भर करता है — पीआरपी और जीएफ़सी में आमतौर पर 3–5 सिटिंग्स लगती हैं, जिसे परामर्श में स्पष्ट किया जाता है।",
    faq_q4:"क्या आप आहार एवं पोषण मार्गदर्शन देते हैं?", faq_a4:"हां, डॉ. तुपे एक योग्य न्यूट्रिशनिस्ट भी हैं और त्वचा, बाल एवं वज़न प्रबंधन योजनाओं में आहार मार्गदर्शन शामिल करती हैं।",
    contact_walkin_badge:"🚶 बिना अपॉइंटमेंट स्वागत है",
    contact_eyebrow:"हमारे किसी भी क्लिनिक में आएं", contact_title:"हमें आपसे मिलकर खुशी होगी।",
    contact_addr_label:"पता", contact_phone_label:"फ़ोन / व्हाट्सएप", contact_email_label:"ईमेल", contact_hours_label:"क्लिनिक का समय",
    clinic1_title:"क्लिनिक 1 — डॉ. प्रतिमा तुपे", clinic2_title:"क्लिनिक 2 — डॉ. सांभाजी तुपे",
    days_mon_sat:"सोमवार – शनिवार", days_sun:"रविवार",
    contact_view_maps:"📍 Google Maps पर देखें",
    footer_tagline:"त्वचा, बाल, लेज़र एवं स्लिमिंग की संपूर्ण देखभाल — एक ऐसे डॉक्टर से जो समस्या की जड़ का इलाज करते हैं।",
    footer_follow:"हमें ऑनलाइन खोजें", footer_rights:"© 2026 डॉ. तुपे स्किन एंड हेयर क्लिनिक। सर्वाधिकार सुरक्षित।"
  },
  mr: {
    brand_sub:"भांडुप वेस्ट, मुंबई",
    nav_about:"आमच्याबद्दल", nav_services:"सेवा", nav_gallery:"गॅलरी", nav_blog:"ब्लॉग", nav_testimonials:"प्रतिक्रिया", nav_contact:"संपर्क", nav_call:"कॉल करा",
    hero_eyebrow:"भांडुप वेस्ट, मुंबई · 31+ वर्षांचा विश्वासार्ह अनुभव",
    hero_title:"तजेलदार त्वचा. निरोगी केस. खरे आणि टिकणारे परिणाम.",
    hero_sub:"डॉ. प्रतिमा तुपे या कॉस्मेटोलॉजिस्ट, ट्रायकोलॉजिस्ट व न्यूट्रिशनिस्ट असून त्यांनी मुंबईतील हजारो रुग्णांना त्वचा, केस, लेझर व स्लिमिंग उपचारांत मदत केली आहे.",
    hero_cta_call:"क्लिनिकला कॉल करा", hero_cta_whatsapp:"व्हॉट्सअ‍ॅपवर संदेश पाठवा",
    stat1_label:"वर्षांची सेवा", stat2_label:"रुग्ण रेटिंग", stat3_label:"उपचार केलेले रुग्ण",
    doctors_eyebrow:"आमची टीम", doctors_title:"दोन क्लिनिक, काळजीचं एकच कुटुंब.",
    about_eyebrow:"डॉ. प्रतिमा तुपे व डॉ. संभाजी तुपे",
    about_title:"31 वर्षांपासून मुंबईला आत्मविश्वास परत देत आहोत.",
    about_p1:"डॉ. प्रतिमा तुपे व डॉ. संभाजी तुपे हे भांडुप वेस्ट येथील 'डॉ. तुपे स्किन, हेअर, लेझर अँड स्लिमिंग क्लिनिक'चे संस्थापक आहेत. कॉस्मेटोलॉजिस्ट, ट्रायकोलॉजिस्ट व न्यूट्रिशनिस्ट असल्याने डॉ. प्रतिमा तुपे केवळ त्वचा किंवा स्काल्पवरच नव्हे, तर आहार, जीवनशैली व प्रत्येक समस्येच्या मूळ कारणावरही उपचार करतात.",
    about_p2:"गेल्या 31 वर्षांत त्यांनी मुरुम, पिगमेंटेशन, फंगल इन्फेक्शनपासून केस गळती, कोंडा व वजन व्यवस्थापनापर्यंत हजारो रुग्णांवर उपचार केले आहेत — 1,600+ रिव्ह्यूजमध्ये 4.9★ रेटिंग व एकनिष्ठ, बहुतांश तोंडी प्रसिद्धीने तयार झालेला रुग्णवर्ग मिळवला आहे.",
    about_quote:"\"माझं तत्त्वज्ञान सोपं आहे — समस्येचं मूळ कारण समजून घ्या, काळजीपूर्वक उपचार करा आणि खरे परिणाम दिसेपर्यंत रुग्णासोबत रहा.\"",
    trust1_title:"पात्र व अनुभवी", trust1_desc:"कॉस्मेटोलॉजिस्ट, ट्रायकोलॉजिस्ट व न्यूट्रिशनिस्ट, 31+ वर्षांचा अनुभव",
    trust2_title:"स्वच्छ व आधुनिक", trust2_desc:"नवीनतम उपचार पद्धती असलेले स्वच्छ क्लिनिक",
    trust3_title:"वैयक्तिक उपचार योजना", trust3_desc:"प्रत्येक उपचार तुमच्या त्वचा, केस व आरोग्य इतिहासानुसार तयार केला जातो",
    trust4_title:"अपॉइंटमेंटशिवाय स्वागत", trust4_desc:"अपॉइंटमेंटची गरज नाही — क्लिनिकच्या वेळेत भेट द्या",
    press_eyebrow:"बातम्यांमध्ये", press_title:"प्रेस व सन्मान.",
    press_sub:"मिड-डेच्या 2023 च्या टॉप 10 उदयोन्मुख व होतकरू महिला उद्योजकांच्या यादीत स्थान, आणि त्वचा व केस निगा क्षेत्रातील कामासाठी सन्मानित.",
    services_eyebrow:"आमची सेवा क्षेत्रे", services_title:"त्वचा, केस, लेझर व स्लिमिंग — एकाच ठिकाणी.",
    services_sub:"कोणताही उपचार सुचवण्याआधी प्रत्येक उपचार योजना सल्लामसलतीने सुरू होते.",
    tab_skin:"त्वचा", tab_hair:"केस", tab_laser:"लेझर", tab_slim:"स्लिमिंग",
    gallery_hero_eyebrow:"गॅलरी", gallery_hero_title:"आमची जागा, उपचार व खरे परिणाम पहा.",
    gallery_hero_sub:"आमचं क्लिनिक, आमची टीम काम करताना, आणि इन्स्टाग्रामवरील नवीनतम फोटो व व्हिडिओंवर जवळून नजर — ओझोन थेरपी, कार्बन लेझर आणि बरंच काही.",
    gallery_insta_eyebrow:"इन्स्टाग्रामवरून लाइव्ह", gallery_insta_title:"थेट आमच्या फीडमधून.",
    gallery_insta_intro:"रोजच्या उपचार व्हिडिओ व परिणामांसाठी <a href=\"https://www.instagram.com/dr_tupe_skin_and_hair_clinic/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--pine); font-weight: 600\">@dr_tupe_skin_and_hair_clinic</a> ला फॉलो करा.",
    gallery_space_eyebrow:"क्लिनिकच्या आत", gallery_space_title:"आमच्या जागेची झलक.",
    why_eyebrow:"रुग्ण आम्हाला का निवडतात", why_title:"उपचार कक्षापलीकडे जाणारी काळजी.",
    why1:"वर्षांचा वैद्यकीय अनुभव", why2:"उपचार केलेले रुग्ण", why3:"वैयक्तिक उपचार योजना", why4:"आमची टीम",
    testi_eyebrow:"खऱ्या रुग्णांचे अनुभव", testi_title:"आमच्या रुग्णांनी सांगितलेल्या गोष्टी.",
    testi_intro:"त्वचा, केस व लेझर उपचारांसाठी डॉ. तुपे स्किन अँड हेअर क्लिनिकला भेट दिलेल्या रुग्णांचे अनुभव वाचा.",
    testi1:"\"2020 पासून मला केसांच्या वाढीचा त्रास होता आणि दीड वर्ष होमिओपॅथी करूनही काही फरक पडला नाही. पीआरपीच्या पाच सेशन्सनंतर, औषधं व आहार मार्गदर्शनासह, माझी केस गळती कमी झाली आणि नवीन केस येऊ लागले.\"",
    testi2:"\"माझ्या डोळे, नाक व कानांभोवती फंगल इन्फेक्शन होतं. डॉ. तुपे यांनी काळजीपूर्वक ऐकून घेतलं आणि खूप काळजीने उपचार केले. सुमारे दहा दिवसांत इन्फेक्शन बरं झालं. या उपचारासाठी मी खूप आभारी आहे.\"",
    testi3:"\"मी सुरुवातीला पिगमेंटेशनसाठी क्लिनिकला भेट दिली. उपचार व सुचवलेल्या उत्पादनांमुळे मी इतकी समाधानी झाले की सुधारणा पाहिल्यावर मी माझ्या केसांवरही उपचार सुरू करण्याचा निर्णय घेतला.\"",
    testi4:"\"मी कोंडा व खवले पडलेल्या स्काल्पच्या तक्रारीसह आले होते. डॉ. तुपे खूप प्रेमळ होत्या, त्यांनी स्थिती स्पष्टपणे समजावली आणि योग्य उपचार सुचवले. खवले कमी झाले असून उपचार सुरू असताना माझ्या प्रगतीने मी खूश आहे.\"",
    testi5:"\"मी माझ्या अंडरआर्म्ससाठी लेझर हेअर रिडक्शन निवडलं. प्रक्रिया आरामदायक होती, डॉक्टर व स्टाफ सहकार्यशील होते, आणि उपचार केलेला भाग किती गुळगुळीत झाला याने मी खूप समाधानी आहे.\"",
    testi6:"\"माझ्या आईच्या पायावर एक वेदनादायक, संसर्गग्रस्त चामखीळ होती. डॉ. तुपे यांनी कोणतीही वेदना न देता ती हळुवारपणे व काळजीपूर्वक काढली. संपूर्ण उपचारादरम्यान त्यांच्या मैत्रीपूर्ण व आश्वासक वागणुकीचं आम्ही कौतुक केलं.\"",
    testi_disclaimer:"रिव्ह्यूज वैयक्तिक रुग्णांचे अनुभव दर्शवतात. उपचाराची योग्यता, कालमर्यादा व परिणाम व्यक्तीनुसार बदलू शकतात.",
    testi_view_more:"Google वर आणखी रुग्ण रिव्ह्यूज पहा",
    faq_eyebrow:"माहितीसाठी", faq_title:"वारंवार विचारले जाणारे प्रश्न.",
    faq_q0:"सल्लामसलत शुल्क किती आहे?", faq_a0:"प्रारंभिक सल्लामसलत शुल्क ₹500 आहे. फॉलो-अप सल्लामसलतीसाठी ₹300 शुल्क आकारलं जातं.",
    faq_q1:"मला अपॉइंटमेंट लागेल का?", faq_a1:"नाही — क्लिनिकच्या वेळेत अपॉइंटमेंटशिवाय येऊ शकता. विशिष्ट उपचारांसाठी आधी कॉल केल्यास बरं.",
    faq_q2:"पहिली भेट फक्त सल्लामसलतीसाठी असते का?", faq_a2:"होय, डॉ. तुपे आधी तुमची समस्या तपासतात आणि मग उपचार योजना सुचवतात — तुमच्या संमतीशिवाय काहीही केलं जात नाही.",
    faq_q3:"मला किती सिटिंग्स लागतील?", faq_a3:"हे उपचार व वैयक्तिक स्थितीनुसार बदलतं — पीआरपी व जीएफसीसाठी साधारण 3–5 सिटिंग्स लागतात, जे सल्लामसलतीत स्पष्ट सांगितलं जातं.",
    faq_q4:"तुम्ही आहार व पोषण मार्गदर्शन देता का?", faq_a4:"होय, डॉ. तुपे या पात्र न्यूट्रिशनिस्ट देखील असून त्वचा, केस व वजन व्यवस्थापन योजनांमध्ये आहार मार्गदर्शनाचा समावेश करतात.",
    contact_walkin_badge:"🚶 अपॉइंटमेंटशिवाय स्वागत आहे",
    contact_eyebrow:"आमच्या दोन्हीपैकी कोणत्याही क्लिनिकला भेट द्या", contact_title:"तुम्हाला भेटण्यास आम्हाला आनंद होईल.",
    contact_addr_label:"पत्ता", contact_phone_label:"फोन / व्हॉट्सअ‍ॅप", contact_email_label:"ईमेल", contact_hours_label:"क्लिनिकची वेळ",
    clinic1_title:"क्लिनिक 1 — डॉ. प्रतिमा तुपे", clinic2_title:"क्लिनिक 2 — डॉ. संभाजी तुपे",
    days_mon_sat:"सोमवार – शनिवार", days_sun:"रविवार",
    contact_view_maps:"📍 Google Maps वर पहा",
    footer_tagline:"त्वचा, केस, लेझर व स्लिमिंगची संपूर्ण काळजी — समस्येच्या मूळ कारणावर उपचार करणाऱ्या डॉक्टरांकडून.",
    footer_follow:"आम्हाला ऑनलाइन शोधा", footer_rights:"© 2026 डॉ. तुपे स्किन अँड हेअर क्लिनिक. सर्व हक्क राखीव."
  }
};

function applyLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = translations[lang] && translations[lang][key];
    if(val !== undefined) el.innerHTML = val;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('#langToggle button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}
document.getElementById('langToggle').addEventListener('click', e=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  applyLang(btn.dataset.lang);
});

// mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navLinks.classList.remove('open')));

// tabs
function activateServiceTab(tab){
  const btn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  const panel = document.querySelector(`.service-panel[data-panel="${tab}"]`);
  if(!btn || !panel) return false;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.service-panel').forEach(p=>p.classList.remove('active'));
  panel.classList.add('active');
  return true;
}
const tabsEl = document.getElementById('tabs');
if(tabsEl){
  tabsEl.addEventListener('click', e=>{
    const btn = e.target.closest('.tab-btn');
    if(!btn) return;
    activateServiceTab(btn.dataset.tab);
  });
}

// skin panel sub-tabs: Skin Treatment / Cosmetic Treatment
const skinSubTabs = document.getElementById('skinSubTabs');
function activateSkinSubTab(subtab){
  if(!skinSubTabs) return false;
  const btn = skinSubTabs.querySelector(`.sub-tab-btn[data-subtab="${subtab}"]`);
  if(!btn) return false;
  skinSubTabs.querySelectorAll('.sub-tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('[data-panel="skin"] .card[data-subcat]').forEach(card=>{
    card.classList.toggle('is-hidden', card.dataset.subcat !== subtab);
  });
  return true;
}
if(skinSubTabs){
  skinSubTabs.addEventListener('click', e=>{
    const btn = e.target.closest('.sub-tab-btn');
    if(!btn) return;
    activateSkinSubTab(btn.dataset.subtab);
  });
  activateSkinSubTab(skinSubTabs.querySelector('.sub-tab-btn.active').dataset.subtab);
}

// nav "Services" dropdown (and any dynamically-added link, e.g. the chatbot) — jump
// straight to a category tab (and sub-tab, for Skin). Delegated so it also catches
// links injected after this script runs.
document.addEventListener('click', e=>{
  const link = e.target.closest('[data-tab-link]');
  if(!link) return;
  const servicesSection = document.getElementById('services');
  if(!servicesSection) return; // different page — let the href navigate there normally
  e.preventDefault();
  activateServiceTab(link.dataset.tabLink);
  if(link.dataset.subtabLink) activateSkinSubTab(link.dataset.subtabLink);
  servicesSection.scrollIntoView({behavior: prefersReducedMotion ? 'auto' : 'smooth', block:'start'});
  history.replaceState(null, '', link.getAttribute('href'));
});

// deep link support: #services-skin(-treatment) / #services-cosmetic-treatment / #services-hair / #services-laser / #services-slim
function handleServiceHash(){
  const hash = window.location.hash;
  const subtabMatch = hash.match(/^#services-(skin-treatment|cosmetic-treatment)$/);
  const tabMatch = hash.match(/^#services-(skin|hair|laser|slim)$/);
  let activated = false;
  if(subtabMatch){
    activated = activateServiceTab('skin');
    activateSkinSubTab(subtabMatch[1]);
  } else if(tabMatch){
    activated = activateServiceTab(tabMatch[1]);
  }
  if(activated) document.getElementById('services')?.scrollIntoView({block:'start'});
}
window.addEventListener('load', handleServiceHash);
window.addEventListener('hashchange', handleServiceHash);

// Independent FAQ disclosures: opening one never closes another.
document.querySelectorAll('.faq-list').forEach(list=>{
  list.querySelectorAll('.faq-item').forEach((item, index)=>{
    const q = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    if(!q || !answer) return;
    const answerId = `${list.id || 'faq'}-answer-${index}`;
    answer.id = answerId;
    q.setAttribute('role','button');
    q.tabIndex = 0;
    q.setAttribute('aria-controls', answerId);
    q.setAttribute('aria-expanded', String(item.classList.contains('open')));
    const toggle = ()=>{
      const open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', String(open));
    };
    q.addEventListener('click', toggle);
    q.addEventListener('keydown', e=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggle(); }
    });
  });
});

// Load map embeds only when the contact section is close to the viewport.
document.querySelectorAll('iframe[data-src]').forEach(frame=>{
  const loadFrame = ()=>{ if(!frame.src) frame.src = frame.dataset.src; };
  if('IntersectionObserver' in window){
    const mapObserver = new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){ loadFrame(); mapObserver.disconnect(); }
    }, {rootMargin:'500px 0px'});
    mapObserver.observe(frame);
  } else loadFrame();
});

// Accessible responsive testimonial carousel.
const testimonialTrack = document.getElementById('testimonialTrack');
if(testimonialTrack){
  const cards = [...testimonialTrack.querySelectorAll('.testi-card')];
  const prev = document.getElementById('testiPrev');
  const next = document.getElementById('testiNext');
  const dots = document.getElementById('testiDots');
  let current = 0;
  let carouselVisible = false;
  let timer;
  cards.forEach((card,index)=>{
    card.setAttribute('aria-label', `${index + 1} of ${cards.length}`);
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `testi-dot${index === 0 ? ' is-active' : ''}`;
    dot.setAttribute('aria-label', `Show testimonial ${index + 1}`);
    dot.addEventListener('click', ()=>goTo(index, true));
    dots.appendChild(dot);
  });
  const updateDots = ()=>[...dots.children].forEach((dot,index)=>dot.classList.toggle('is-active',index === current));
  const goTo = (index, userInitiated=false)=>{
    current = (index + cards.length) % cards.length;
    testimonialTrack.scrollTo({left:cards[current].offsetLeft - testimonialTrack.offsetLeft,behavior:prefersReducedMotion?'auto':'smooth'});
    updateDots();
    if(userInitiated) restart();
  };
  const restart = ()=>{
    clearInterval(timer);
    if(!prefersReducedMotion && carouselVisible) timer = setInterval(()=>goTo(current + 1), 4000);
  };
  prev.addEventListener('click',()=>goTo(current - 1,true));
  next.addEventListener('click',()=>goTo(current + 1,true));
  testimonialTrack.addEventListener('mouseenter',()=>{clearInterval(timer);});
  testimonialTrack.addEventListener('mouseleave',restart);
  testimonialTrack.addEventListener('focusin',()=>{clearInterval(timer);});
  testimonialTrack.addEventListener('focusout',restart);
  const testimonialObserver = new IntersectionObserver(entries=>{
    carouselVisible = entries[0].isIntersecting;
    restart();
  }, {threshold:.25});
  testimonialObserver.observe(testimonialTrack);
}

const backToTop = document.getElementById('backToTop');
if(backToTop){
  const updateBackToTop = ()=>backToTop.classList.toggle('is-visible', window.scrollY > 500);
  window.addEventListener('scroll', updateBackToTop, {passive:true});
  backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:prefersReducedMotion?'auto':'smooth'}));
  updateBackToTop();
}

// blog category filter (Skin / Hair / Laser / Slimming) — applies to both the
// featured grid and the "More Stories" list; hides either block entirely if
// none of its entries match the active category.
const blogFilterTabs = document.querySelector('.blog-filter-tabs');
if(blogFilterTabs){
  const blogEntries = document.querySelectorAll('.blog-entry');
  const blogFeaturedSection = document.querySelector('.blog-featured');
  const blogListEl = document.querySelector('.blog-list');
  const blogEmptyNote = document.getElementById('blogEmptyNote');
  blogFilterTabs.addEventListener('click', e=>{
    const btn = e.target.closest('[data-blog-filter]');
    if(!btn) return;
    blogFilterTabs.querySelectorAll('[data-blog-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.blogFilter;
    let featuredVisible = 0, listVisible = 0;
    blogEntries.forEach(entry=>{
      const match = filter === 'all' || entry.dataset.category === filter;
      entry.style.display = match ? '' : 'none';
      if(match){ entry.closest('.blog-list-row') ? listVisible++ : featuredVisible++; }
    });
    if(blogFeaturedSection) blogFeaturedSection.hidden = featuredVisible === 0;
    if(blogListEl) blogListEl.hidden = listVisible === 0;
    if(blogEmptyNote) blogEmptyNote.hidden = (featuredVisible + listVisible) > 0;
  });
}

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('in'); });
},{threshold:0.05, rootMargin:'0px 0px -10% 0px'});
revealEls.forEach(el=>io.observe(el));
// safety net: on very short/unusual viewports an element can sit just outside any
// triggered intersection (e.g. taller than the viewport) — force it visible after a beat
// so nothing gets permanently stuck at opacity:0.
setTimeout(()=>{
  revealEls.forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
  });
}, 1200);

// header shadow once the page scrolls
const siteHeader = document.querySelector('header');
if(siteHeader){
  const updateHeaderShadow = ()=> siteHeader.classList.toggle('scrolled', window.scrollY > 8);
  updateHeaderShadow();
  window.addEventListener('scroll', updateHeaderShadow, {passive:true});
}

// lazy images: fade in once actually loaded (skip if reduced-motion)
if(!prefersReducedMotion){
  document.querySelectorAll('img[loading="lazy"]').forEach(img=>{
    const markLoaded = ()=> img.classList.add('is-loaded');
    if(img.complete) markLoaded();
    else img.addEventListener('load', markLoaded, {once:true});
  });
}

// animated counting stat numbers (hero stats + "why choose us" numbers)
const counterEls = document.querySelectorAll('.stat .num, .why-item .num');
if(counterEls.length && !prefersReducedMotion){
  const countIO = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(!en.isIntersecting) return;
      countIO.unobserve(en.target);
      const el = en.target;
      const raw = el.textContent.trim();
      const match = raw.match(/^([\d,]*\.?\d+)(.*)$/);
      if(!match){ return; }
      const [, numStr, suffix] = match;
      const target = parseFloat(numStr.replace(/,/g,''));
      const isDecimal = numStr.includes('.');
      const hasCommas = numStr.includes(',');
      const duration = 1200;
      const start = performance.now();
      const tick = now=>{
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        const shown = isDecimal ? current.toFixed(1) : Math.round(current).toLocaleString(hasCommas ? 'en-IN' : undefined);
        el.textContent = shown + suffix;
        if(progress < 1) requestAnimationFrame(tick);
        else el.textContent = raw;
      };
      requestAnimationFrame(tick);
    });
  },{threshold:0.4});
  counterEls.forEach(el=>countIO.observe(el));
}

// clinic photo carousel (gallery.html)
const carouselEl = document.getElementById('clinicCarousel');
if(carouselEl){
  const slides = [...carouselEl.querySelectorAll('.carousel-slide')];
  const dots = [...carouselEl.querySelectorAll('.carousel-dot')];
  let current = slides.findIndex(s=>s.classList.contains('is-active'));
  if(current < 0) current = 0;
  let timer = null;

  const goTo = index=>{
    slides[current].classList.remove('is-active');
    dots[current]?.classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current]?.classList.add('is-active');
  };
  const next = ()=> goTo(current + 1);
  const stopAutoplay = ()=>{ if(timer) clearInterval(timer); timer = null; };
  const startAutoplay = ()=>{
    if(prefersReducedMotion || slides.length < 2) return;
    stopAutoplay();
    timer = setInterval(next, 3000);
  };

  carouselEl.querySelector('.carousel-next')?.addEventListener('click', ()=>{ next(); startAutoplay(); });
  carouselEl.querySelector('.carousel-prev')?.addEventListener('click', ()=>{ goTo(current - 1); startAutoplay(); });
  dots.forEach((dot, i)=> dot.addEventListener('click', ()=>{ goTo(i); startAutoplay(); }));

  carouselEl.addEventListener('mouseenter', stopAutoplay);
  carouselEl.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}

/* ---------- SHARED SITE CONTENT INDEX (used by both search and the chatbot) ---------- */
const TAB_LABELS = { skin:'Skin', hair:'Hair', laser:'Laser', slim:'Slimming' };
const SUBCAT_LABELS = { 'skin-treatment':'Skin Treatment', 'cosmetic-treatment':'Cosmetic Treatment' };

const SITE_INFO_ENTRIES = [
  { title:'Contact & Clinic Locations', desc:'Addresses, phone numbers, maps and directions for both clinics in Bhandup West, Mumbai.', tag:'Contact', href:'index.html#contact', icon:'📍' },
  { title:'Clinic Hours', desc:'Monday–Saturday 10:00 AM–2:00 PM & 6:00 PM–10:00 PM. Sunday 10:00 AM–2:00 PM.', tag:'Contact', href:'index.html#contact', icon:'🕐' },
  { title:'Consultation Fees', desc:'Initial consultation ₹500. Follow-up visits ₹300.', tag:'FAQ', href:'index.html#faq', icon:'💰' },
  { title:'Our Doctors / Team', desc:'Meet Dr. Pratima Tupe and Dr. Sambhaji Tupe — 31 years of trusted care.', tag:'About', href:'index.html#doctors', icon:'🩺' },
  { title:'Photo & Video Gallery', desc:'Clinic photos, treatment room tour and our latest Instagram posts.', tag:'Gallery', href:'gallery.html', icon:'🖼️' },
  { title:'Moles, Warts, Skin Tags & Corns — How to Tell Them Apart', desc:'What each of these common skin growths is, whether they’re harmful, and when to get one checked.', tag:'Blog', href:'blog.html#moles-warts-skin-tags-corns', icon:'📝' },
  { title:'Why Medi Facial? Types & Benefits at Dr. Tupe’s Clinic', desc:'What makes a facial medical-grade, plus a full guide to every medi facial type we offer.', tag:'Blog', href:'blog.html#why-medi-facial', icon:'📝' },
  { title:'Pigmentation & Melasma — What Actually Works', desc:'Why sun-damage pigmentation and melasma need different treatment, and what actually helps each.', tag:'Blog', href:'blog.html#pigmentation-and-melasma', icon:'📝' },
  { title:'Understanding Chemical Peels — Which Strength Is Right for You?', desc:'How gentle peels like Mandelic acid differ from brightening peels like Vitamin C, and how to choose.', tag:'Blog', href:'blog.html#understanding-chemical-peels', icon:'📝' },
  { title:'Which Facial Is Right for You? A Guide to Our Treatments', desc:'A guide to choosing between HydraFacial, Photo Facial, Vampire Facial and more, by concern.', tag:'Blog', href:'blog.html#which-facial-is-right-for-you', icon:'📝' },
  { title:'Why Is My Hair Falling Out? Understanding the Causes', desc:'Genetics, stress, styling habits, medications and scalp conditions that commonly cause hair loss.', tag:'Blog', href:'blog.html#understanding-hair-loss', icon:'📝' },
  { title:'Body Composition: Why the Scale Is Only Part of the Story', desc:'Body fat, visceral fat, muscle, metabolism and body age explained.', tag:'Slimming Blog', href:'blog.html#body-composition-beyond-bmi', icon:'📝' },
  { title:'Before a Weight-Loss Program: Tests, Measurements & Goals', desc:'How medical assessment creates a safer, measurable starting point.', tag:'Slimming Blog', href:'blog.html#medical-weight-loss-assessment', icon:'📝' },
  { title:'EMS Body Toning: What Electrical Muscle Stimulation Does', desc:'How EMS works, where it may fit and important contraindications.', tag:'Slimming Blog', href:'blog.html#ems-body-toning', icon:'📝' },
  { title:'Ultrasound Cavitation for Targeted Body Contouring', desc:'Realistic uses, limitations and safety screening for ultrasound body contouring.', tag:'Slimming Blog', href:'blog.html#ultrasound-cavitation-guide', icon:'📝' },
  { title:'Radiofrequency Body Tightening: Firmness After Inch Loss', desc:'How RF supports firmer-looking skin in a body-contouring plan.', tag:'Slimming Blog', href:'blog.html#radiofrequency-skin-tightening', icon:'📝' },
  { title:'Lipolysis Injections: Candidate Areas, Results & Safety', desc:'Candidate areas, expected reactions, limitations and medical screening.', tag:'Slimming Blog', href:'blog.html#lipolysis-injections-guide', icon:'📝' },
  { title:'Sleep, Stress & Weight: The Often-Missed Connection', desc:'How sleep, stress and breathing habits affect sustainable weight management.', tag:'Slimming Blog', href:'blog.html#sleep-stress-and-weight', icon:'📝' },
  { title:'A Practical Indian Eating Pattern for Sustainable Weight Loss', desc:'Balanced Indian meals with protein, fibre, vegetables and sensible portions.', tag:'Slimming Blog', href:'blog.html#balanced-indian-weight-loss-plate', icon:'📝' },
  { title:'Q-Switched Laser: Pigmentation, Spots & Tattoo Ink', desc:'How short laser pulses target pigment and why colour, depth and skin type matter.', tag:'Laser Blog', href:'blog.html#q-switch-laser-guide', icon:'📝' },
  { title:'Carbon Laser Peel: What the Hollywood Facial Can Do', desc:'A realistic guide to the carbon mask, laser pass, benefits, limits and aftercare.', tag:'Laser Blog', href:'blog.html#carbon-laser-peel-guide', icon:'📝' },
  { title:'Laser Birthmark Reduction: Types, Results & Safety', desc:'Why pigmented and vascular birthmarks need diagnosis before laser selection.', tag:'Laser Blog', href:'blog.html#laser-birthmark-reduction', icon:'📝' },
  { title:'Laser Hair Reduction: How It Works & What to Expect', desc:'Growth cycles, preparation and why reduction is more accurate than permanent removal.', tag:'Laser Blog', href:'blog.html#laser-hair-reduction-guide', icon:'📝' },
  { title:'IPL Photofacial for Sun Spots, Redness & Rejuvenation', desc:'What intense pulsed light treats, its limits and why melasma needs caution.', tag:'Laser Blog', href:'blog.html#ipl-photofacial-guide', icon:'📝' },
  { title:'Freckles: Why They Appear & When Treatment Helps', desc:'Genetics, UV exposure, sunscreen and preventing recurrence.', tag:'Skin Blog', href:'blog.html#freckles-causes-and-care', icon:'📝' },
  { title:'Dark Lips: Common Causes, Daily Care & Treatment Options', desc:'Why lips darken, habits that worsen pigmentation and when to seek assessment.', tag:'Skin Blog', href:'blog.html#dark-lips-causes-care', icon:'📝' },
  { title:'Hirsutism: Understanding Excess Facial Hair in Women', desc:'Hormones, PCOS, medicines, family patterns and medical evaluation.', tag:'Hair Blog', href:'blog.html#hirsutism-excess-facial-hair', icon:'📝' },
  { title:'Paradoxical Hair Growth After Laser', desc:'A rare response where fine hair becomes denser and how screening reduces risk.', tag:'Hair Blog', href:'blog.html#paradoxical-hair-growth-after-laser', icon:'📝' },
  { title:'Minoxidil for Hair Loss: Results, Shedding & Safe Use', desc:'What topical minoxidil can help, why early shedding may happen and when medical guidance is essential.', tag:'Hair Blog', href:'blog.html#minoxidil-hair-loss-guide', icon:'📝' },
  { title:'Dandruff & Scalp Health: Causes, Control and Warning Signs', desc:'Why dandruff recurs, how medicated shampoos help and when flaking may be another scalp condition.', tag:'Hair Blog', href:'blog.html#dandruff-healthy-scalp-guide', icon:'📝' },
  { title:'PRP vs. GFC for Hair Loss: What Is the Difference?', desc:'How autologous platelet treatments are prepared, what they may improve and how expectations should be set.', tag:'Hair Blog', href:'blog.html#prp-vs-gfc-hair-treatment', icon:'📝' },
  { title:'Frequently Asked Questions', desc:'Appointments, first visit, number of sessions and more.', tag:'FAQ', href:'index.html#faq', icon:'❓' },
  { title:'Call Clinic 1', desc:'+91 97696 57185 — Dr. Pratima Tupe, Bhandup West.', tag:'Contact', href:'tel:+919769657185', icon:'📞' },
  { title:'Call Clinic 2', desc:'+91 93239 04969 — Dr. Sambhaji Tupe, Bhandup West.', tag:'Contact', href:'tel:+919323904969', icon:'📞' },
  { title:'WhatsApp Us', desc:'Message Clinic 1 directly on WhatsApp.', tag:'Contact', href:'https://wa.me/919769657185', icon:'💬', external:true }
];

function extractTreatments(doc){
  const items = [];
  doc.querySelectorAll('.service-panel').forEach(panel=>{
    const tab = panel.dataset.panel;
    panel.querySelectorAll('.card').forEach(card=>{
      const title = card.querySelector('h3')?.textContent.trim();
      if(!title) return;
      const desc = (card.querySelector('p')?.textContent || '').trim().replace(/\s+/g,' ');
      const subcat = card.dataset.subcat || null;
      const tag = (subcat && SUBCAT_LABELS[subcat]) || TAB_LABELS[tab] || 'Treatment';
      items.push({ title, desc, tag, href:'index.html#services-' + (subcat || tab), tab, subcat, icon:'✨' });
    });
  });
  return items;
}

// Built once and shared: the live source of truth is always the actual service
// cards (scanned from this page, or fetched from index.html when we're on a page
// that doesn't have them), so the chatbot and search never drift from real content.
let siteSearchIndex = SITE_INFO_ENTRIES.slice();
if(document.getElementById('services')){
  siteSearchIndex = siteSearchIndex.concat(extractTreatments(document));
} else {
  fetch('index.html').then(r=> r.text()).then(html=>{
    const doc = new DOMParser().parseFromString(html, 'text/html');
    siteSearchIndex = siteSearchIndex.concat(extractTreatments(doc));
  }).catch(()=>{});
}

const SEARCH_STOPWORDS = new Set(['do','you','your','the','is','are','for','and','with','what','how','can','have','has','does','a','an','of','to','in','on','at','my','i','we','it','this','that','treat','treats','offer','offers','provide','about','me','tell','us','any','some','there']);
function significantWords(str){
  return str.toLowerCase().split(/[^a-z0-9]+/).filter(w=> w.length > 2 && !SEARCH_STOPWORDS.has(w));
}

// ---- lightweight fuzzy matching: typos ("akne") and squashed-together words
// ("hairfall", "weightloss") — no dictionary or AI needed, just edit distance
// plus a substring check for compound words. ----
function levenshteinDistance(a, b){
  if(a === b) return 0;
  const m = a.length, n = b.length;
  if(m === 0) return n;
  if(n === 0) return m;
  let prev = Array.from({ length: n + 1 }, (_, j)=> j);
  for(let i = 1; i <= m; i++){
    const curr = [i];
    for(let j = 1; j <= n; j++){
      curr[j] = a[i - 1] === b[j - 1]
        ? prev[j - 1]
        : 1 + Math.min(prev[j - 1], prev[j], curr[j - 1]);
    }
    prev = curr;
  }
  return prev[n];
}

// scores how well a single query word matches a single target word: exact match,
// one containing the other (catches "hairfall" vs "hair"/"fall"), or a small edit
// distance (catches typos like "akne" vs "acne"). 0 = no match.
function fuzzyWordScore(qWord, targetWord){
  if(qWord === targetWord) return 2;
  if(targetWord.length > 3 && (qWord.includes(targetWord) || targetWord.includes(qWord))) return 1.5;
  const maxLen = Math.max(qWord.length, targetWord.length);
  if(maxLen < 4) return 0; // too short to fuzzy-match safely without false positives
  const threshold = maxLen <= 5 ? 1 : maxLen <= 8 ? 2 : 3;
  return levenshteinDistance(qWord, targetWord) <= threshold ? 1 : 0;
}

// Handles short keyword search-bar queries ("oxygeno"), full natural-language
// chatbot questions ("do you treat acne?"), and typos/squashed words
// ("hairfall", "akne") — all against the same index.
function searchSiteIndex(query, limit){
  const q = (query || '').trim().toLowerCase();
  if(!q) return [];
  const qWords = significantWords(q);
  const scored = [];
  siteSearchIndex.forEach(item=>{
    const title = item.title.toLowerCase();
    const desc = (item.desc || '').toLowerCase();
    let score = 0;
    if(title === q) score += 6;
    if(title.length > 2 && q.includes(title)) score += 4; // e.g. title "acne" inside "do you treat acne"
    if(title.includes(q)) score += title.startsWith(q) ? 3 : 2; // e.g. query "oxygeno" inside title "oxygeno facial"
    if(desc.includes(q)) score += 1;
    // space-agnostic compare: catches "hairfall" matching text that says "hair fall"
    const squashedQuery = q.replace(/[^a-z0-9]/g, '');
    if(squashedQuery.length > 4){
      if(title.replace(/[^a-z0-9]/g, '').includes(squashedQuery)) score += 5;
      else if(desc.replace(/[^a-z0-9]/g, '').includes(squashedQuery)) score += 3;
    }
    const titleWords = significantWords(title);
    const descWords = significantWords(desc);
    qWords.forEach(w=>{
      let titleBest = 0;
      titleWords.forEach(tw=>{ titleBest = Math.max(titleBest, fuzzyWordScore(w, tw)); });
      if(titleBest > 0){
        score += titleBest * 2;
      } else {
        let descBest = 0;
        descWords.forEach(dw=>{ descBest = Math.max(descBest, fuzzyWordScore(w, dw)); });
        score += descBest * 0.5;
      }
    });
    if(score > 0) scored.push({ item, score });
  });
  scored.sort((a, b)=> b.score - a.score);
  return scored.slice(0, limit || 8).map(s=> s.item);
}

// scrolls a specific treatment card into view and gives it a brief highlight pulse
function highlightTreatmentCard(title){
  if(!title) return;
  const norm = t=> t.trim().toLowerCase();
  let target = null;
  document.querySelectorAll('.service-panel .card').forEach(card=>{
    const h3 = card.querySelector('h3');
    if(h3 && norm(h3.textContent) === norm(title)) target = card;
  });
  if(!target) return;
  target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
  target.classList.add('search-highlight');
  setTimeout(()=> target.classList.remove('search-highlight'), 2200);
}

// Jumps to a treatment card (from search or the chatbot): switches tab/sub-tab and
// highlights it if we're already on index.html, otherwise navigates there first.
function goToTreatmentCard({ tab, subcat, title, href }){
  if(document.getElementById('services')){
    activateServiceTab(tab);
    if(subcat) activateSkinSubTab(subcat);
    setTimeout(()=> highlightTreatmentCard(title), 80);
  } else {
    sessionStorage.setItem('pendingHighlightTreatment', title);
    window.location.href = href || ('index.html#services-' + (subcat || tab));
  }
}

// if a search/chatbot result sent us to index.html for a card that isn't on this
// page, pick up the pending highlight once the target page has loaded.
window.addEventListener('load', ()=>{
  const pending = sessionStorage.getItem('pendingHighlightTreatment');
  if(pending){
    sessionStorage.removeItem('pendingHighlightTreatment');
    setTimeout(()=> highlightTreatmentCard(pending), 400);
  }
});

/* ---------- TREATMENT DETAIL MODAL ---------- */
// Data-driven: one shared modal element, populated per treatment from TREATMENT_INFO.
// Cards just need <button data-modal-open="slug">; no per-treatment HTML block to
// hand-maintain. Fields (benefits/whoFor/whatToExpect/beforeSession/afterSession)
// are all optional — omit whatever wasn't confirmed against real source material
// rather than inventing content for it.
const TREATMENT_INFO = {
  // ---- Hair ----
  prp: {
    title: 'PRP Therapy', category: 'Hair Treatment', image: 'images/prp.webp',
    lead: 'Platelet-Rich Plasma (PRP) uses growth factors drawn from your own blood to wake up dormant hair follicles and slow shedding — one of the most researched non-surgical hair-loss treatments available today.',
    benefits: ['Reduces hair shedding and stimulates new growth', 'Increases thickness of existing hair follicles', 'Natural — uses your own blood, no synthetic drugs', 'Up to 90% success rate across clinical use'],
    whoFor: "Best results are seen in your 30s, though it's effective from age 18–72. A good fit if you have androgenic alopecia, patchy hair loss, or stress-related shedding.",
    whatToExpect: 'A course of 4–6 sessions, spaced a few weeks apart. Results are typically visible in 4–6 weeks and last 18–24 months, with a yearly touch-up recommended.',
    beforeSession: 'Avoid alcohol for 2 days prior. Not recommended if you have Hepatitis C, HIV, blood cancer, or are on blood-thinning medication for cardiovascular disease.'
  },
  gfc: {
    title: 'GFC Treatment', category: 'Hair Treatment', image: 'images/gfc_.webp',
    lead: 'Growth Factor Concentrate is an advanced, more concentrated form of platelet therapy — it delivers a higher density of your own growth factors straight into the scalp than standard PRP.',
    benefits: ['Reduces hair fall', 'Rejuvenates the hair follicle', 'Improves hair thickness & strengthens the shaft', 'Increases hair volume', 'Also brightens & rejuvenates the scalp skin'],
    whatToExpect: 'A painless, no-downtime procedure done in-clinic. Most patients notice reduced shedding within the first few weeks of their session course.'
  },
  pdo: {
    title: 'PDO Thread Therapy', category: 'Hair Treatment', image: 'images/pdo.webp',
    lead: 'Ultra-fine, dissolvable medical-grade threads are inserted just beneath the scalp, where they stimulate blood flow and collagen production around the follicle — encouraging thicker, healthier regrowth as the threads gradually dissolve naturally over the following months.',
    benefits: ['Significant reduction in hair shedding', 'New hair growth reported in as little as one month', 'Quick, relatively painless procedure', 'No downtime and very little recovery', 'Threads dissolve completely on their own — nothing left behind'],
    whoFor: 'A good option for early-to-moderate thinning hair, in both men and women looking for a non-surgical alternative to a hair transplant.',
    whatToExpect: 'Mild redness around the insertion points for a day or two is normal. Many patients notice reduced shedding within a few weeks, with new growth often visible around the one-month mark.'
  },

  // ---- Skin: rich content (sourced from the clinic's own patient brochure) ----
  'acne-scars': {
    title: 'Acne Scars', category: 'Cosmetic Treatment', image: 'images/acne_scar.webp',
    lead: 'The Acne Scar Peel Medifacial delivers an intensive regeneration effect that activates skin cell repair from within.',
    benefits: ['Activates skin cell repair from the inside', 'Increases collagen and elastin production', 'Improves overall skin texture and quality']
  },
  'oxygeno-facial': {
    title: 'OxyGeno Facial', category: 'Cosmetic Treatment', image: 'images/oxygeno.webp',
    lead: 'A 3-in-1 facial combining Tripolar RF, oxygenation and ultrasound for skin tightening, brightening and deeper product penetration in a single session.',
    benefits: ['Skin plumping & hydrating', 'Restored skin volume', 'Renewed youthful glow', 'Increased collagen production', 'Reduced hyperpigmentation', 'Reduced wrinkles', 'Safe for all skin types'],
    whoFor: "Not suitable during pregnancy or nursing, or if you have active acne, eczema, rashes, dermatitis, sunburn, injured skin, rosacea or psoriasis — let the clinic know if any of these apply."
  },
  'medi-facial': {
    title: 'Medi Facial', category: 'Cosmetic Treatment', image: 'images/medifacial.webp',
    lead: "Medi facials are skin-transformation treatments using clinically proven, science-based products — ultrasonics, meso-poration and laser — combined with vitamins, serums, chemical peels and plant extracts for promising, long-lasting results.",
    whatToExpect: 'Healthy, hydrated skin within 24–48 hours, with longer-term benefits building over the following weeks as cell regeneration continues.',
    afterSession: "Stay hydrated, cleanse gently, use sun protection and follow your dermatologist's advice. Avoid steam/sauna, waxing, shaving or picking at the skin, and skip heavy makeup for a few days."
  },
  hydrafacial: {
    title: 'HydraFacial', category: 'Cosmetic Treatment', image: 'images/hydrafacial.webp',
    lead: 'A gentle, multi-step treatment — deep cleansing, exfoliation, acne and impurity extraction, and nourishing serums — customised to your skin type.',
    benefits: ['Gentle on the skin', 'Restores firmness', 'Safe and effective', 'Beneficial for sensitive skin', 'Hydrates the skin', 'Consistent results', 'Customised treatment', 'Suitable for every skin type & tone']
  },
  'photo-facial': {
    title: 'Photo Facial', category: 'Cosmetic Treatment', image: 'images/photofacial.webp',
    lead: "IPL (Intense Pulsed Light) Photo Facial restores your skin's natural beauty — reducing pigmentation, fine lines and large pores while stimulating collagen and elastin — in a roughly half-hour session.",
    benefits: ['Improves skin texture & tone', 'Reduces wrinkles & fine lines', 'Stimulates collagen', 'Decreases redness', 'Removes brown spots', 'Brightens overall complexion'],
    whoFor: "Works best on lighter to medium skin tones — it's generally not recommended for darker skin tones. It fades pigmentation caused by sun damage, but not pigmentation caused by hormones or certain medications (such as melasma).",
    whatToExpect: 'Most people need one to three sessions; results build gradually as collagen production increases.'
  },
  'diamond-facial': {
    title: 'Diamond / Skin Polishing Facial', category: 'Cosmetic Treatment', image: 'images/diamondfacial.webp',
    lead: 'A skin-polishing and rejuvenating treatment that gently exfoliates and detoxifies for firmer, brighter skin.',
    benefits: ['Prevents ageing', 'Exfoliates', 'Firms up the skin', 'Detoxifies', 'Hydrates', 'Brightens', 'Improves product absorption', 'Controls breakouts', 'Rejuvenates']
  },
  'carbon-laser-facial': {
    title: 'Carbon Laser Facial / Hollywood Facial', category: 'Cosmetic Treatment', image: 'images/carbon_laser_.webp',
    lead: 'A non-invasive treatment: a layer of liquid carbon is applied to the skin, then a laser gently blasts it away — lifting out impurities as it goes.',
    benefits: ['Brightens complexion', 'Smooths rough skin', 'Increases collagen & elastin', 'Lightens unwanted pigmentation', 'Diminishes fine lines & wrinkles', 'Clears stubborn blackheads', 'Fast, painless & effective']
  },
  'omega-led-facial': {
    title: 'Omega LED Light Facial', category: 'Cosmetic Treatment', image: 'images/omegaletlightfacial.webp',
    lead: 'Medical-grade LED light therapy using targeted wavelengths to calm, brighten and rejuvenate the skin.',
    benefits: ['Anti-ageing', 'Anti-acne', 'Evens skin tone', 'Reduces redness', 'Revitalisation', 'Soothing', 'Cell rejuvenation', 'Infrared booster']
  },
  'pumpkin-peel-facial': {
    title: 'Pumpkin Peel Facial', category: 'Cosmetic Treatment', image: 'images/pumpkinpeelfacial.webp',
    lead: 'Pumpkin is rich in Vitamins A, C and E, antioxidants, zinc and potassium — helping fight sun damage, wrinkles and dryness while its natural fruit enzymes gently exfoliate.',
    benefits: ['Improves skin brightness', 'Improves skin hydration', "Supports the skin's barrier function", 'Refines the appearance of wrinkles', 'Decreases existing acne and helps prevent new breakouts', 'Evens skin tone and lightens pigmentation', 'Stimulates the skin'],
    whoFor: 'Good for dryness, ageing and acne-prone skin.'
  },
  'acne-laser-facial': {
    title: 'Acne Laser Facial', category: 'Cosmetic Treatment', image: 'images/acnelaserfacial.webp',
    lead: 'Also known as photofacial therapy — IPL emits quick pulses of broadband light energy that treat acne by targeting its main underlying causes.',
    benefits: ['Clears blackheads', 'Clears comedones', 'Clears whiteheads', 'Treats pustular acne', 'Helps superficial acne scarring'],
    whoFor: 'Suited to oily, acne-prone and congested skin types.'
  },
  'korean-glass-facial': {
    title: 'Korean Glass Facial', category: 'Cosmetic Treatment', image: 'images/koreanglassfacial.webp',
    lead: 'A multi-step, K-beauty-inspired facial — double deep cleanse, customised enzyme peel, microdermabrasion, LED light therapy and a hydrating mask — finished with an 8–10 minute hand massage.',
    benefits: ['Glowing skin', 'Reduces pigmentation', 'Tightens skin', 'Reduces fine lines & wrinkles', 'Non-invasive'],
    whatToExpect: 'Treatment typically takes 45 minutes to 1 hour.'
  },
  'mandelic-peel-facial': {
    title: 'Mandelic Peel Facial', category: 'Cosmetic Treatment', image: 'images/mandelicpeel.webp',
    lead: "Mandelic acid has a larger molecule than other peel acids, giving it a low irritation factor — with only light to no visible peeling, it's considered a gentle, superficial peel.",
    benefits: ['Reduces fine lines and reverses signs of ageing, improving skin tone and texture', 'Rejuvenates and improves skin clarity and uneven pigmentation', 'Reduces the appearance of large pores and lifts brown spots', 'Ideal for acne-prone skin, and loosens blackheads']
  },
  'rf-antiaging-facial': {
    title: 'Radiofrequency / Anti-aging Facial', category: 'Cosmetic Treatment', image: 'images/antiaging.webp',
    lead: 'Uses radiofrequency energy to activate collagen — adding volume, softening lines, reinforcing texture and hydrating the skin as it slows the visible signs of ageing.',
    benefits: ['Reduces the appearance of fine lines & wrinkles', 'Hydrates dehydrated skin', 'Boosts collagen and elastin for plumper, firmer-feeling skin']
  },
  'vitc-citrus-peel-facial': {
    title: 'Vit. C Skin Brightening / Citrus Peel Medi Facial', category: 'Cosmetic Treatment', image: 'images/citruspeel.webp',
    lead: 'A concentrated Vitamin C treatment that reduces hyperpigmentation and sun damage while brightening and hydrating the skin.',
    benefits: ['Removes dark spots & pigmentation', 'Anti-ageing', 'Natural radiant glow', 'Moisturises & hydrates skin', 'Evens skin tone']
  },
  'vampire-facial': {
    title: 'Vampire Facial', category: 'Cosmetic Treatment', image: 'images/vampirefacial.webp',
    lead: 'A Vampire Facial combines microneedling with Platelet-Rich Plasma (PRP), stimulating collagen regrowth so skin can tighten and regain a youthful glow.',
    benefits: ['Improves skin texture', 'Reduces inflammation', 'Promotes new skin cell growth', 'Stimulates collagen production', 'Reduces the appearance of fine lines and wrinkles', 'Firms and tightens skin', 'Lightens dark circles']
  },
  'fire-ice-facial': { title: 'Fire & Ice / Red Carpet Facial', category: 'Cosmetic Treatment', image: 'images/medifacial.webp', lead: 'A two-stage medi facial pairing intensive resurfacing with a cooling, calming mask for smoother and brighter-looking skin.', benefits: ['Refines skin texture', 'Supports a brighter complexion', 'Helps soften the look of fine lines', 'Minimal downtime for many patients'], whoFor: 'Best selected after a skin consultation, particularly before an event or when dullness and uneven texture are the main concerns.' },
  'ozone-high-frequency-facial': { title: 'Ozone High Frequency Facial', category: 'Cosmetic Treatment', image: 'images/omegaletlightfacial.webp', lead: 'A glass-electrode high-frequency treatment that produces a mild warming and oxygenating effect at the skin surface.', benefits: ['Supports acne and congestion care', 'Encourages circulation', 'Helps calm the appearance of inflammation', 'Supports skin rejuvenation'], whoFor: 'May suit oily or acne-prone skin; disclose pregnancy, a pacemaker, epilepsy or other medical conditions before treatment.' },
  'collagen-facial': { title: 'Collagen Facial', category: 'Cosmetic Treatment', image: 'images/antiaging.webp', lead: 'A moisture-rich facial focused on hydration, suppleness and supporting firmer-looking skin.', benefits: ['Deep hydration', 'Plumper-looking skin', 'Softens the appearance of fine lines', 'Improves visible radiance'] },
  'dermaplaning-facial': { title: 'Dermaplaning Facial', category: 'Cosmetic Treatment', image: 'images/diamondfacial.webp', lead: 'A trained professional uses a sterile blade at a controlled angle to remove surface dead skin cells and fine vellus hair.', benefits: ['Smoother skin texture', 'Brighter appearance', 'Improved makeup application', 'No chemical exfoliant required'], whoFor: 'Not generally performed over active inflamed acne, open wounds or active skin infection.' },
  'laser-resurfacing-facial': { title: 'Laser Resurfacing / Rejuvenating Facial', category: 'Cosmetic Treatment', image: 'images/carbon_laser_.webp', lead: 'A doctor-guided laser procedure selected according to skin type and concern to improve tone, texture and visible signs of ageing.', benefits: ['Supports collagen remodelling', 'Improves uneven texture', 'Can reduce the look of fine lines', 'Can address selected pigmentation concerns'], whatToExpect: 'Downtime and aftercare depend on the laser and treatment depth. Strict sun protection is essential.' },
  'meso-magic-facial': { title: 'Meso Magic Facial', category: 'Cosmetic Treatment', image: 'images/medifacial.webp', lead: 'A customised mesotherapy-style facial designed to improve delivery of selected hydrating and brightening actives.', benefits: ['Improves hydration', 'Supports radiance', 'Customised to the skin concern', 'Fresh, revitalised appearance'] },
  'micro-derma-peel-facial': { title: 'Micro Derma Peel Facial', category: 'Cosmetic Treatment', image: 'images/diamondfacial.webp', lead: 'Combines controlled microdermabrasion with a dermatologist-selected superficial peel for layered exfoliation.', benefits: ['Refines rough texture', 'Brightens dull skin', 'Helps unclog pores', 'Improves uneven tone'], whoFor: 'The peel type and intensity must be selected for your skin; it may not suit irritated, infected or highly sensitised skin.' },
  'advanced-skin-whitening-peel': { title: 'Advanced Skin Whitening Peel Facial', category: 'Cosmetic Treatment', image: 'images/citruspeel.webp', lead: 'A professional brightening peel intended to improve the appearance of tanning, dark spots and uneven tone—not to change your natural skin colour.', benefits: ['Targets visible pigmentation', 'Improves dullness', 'Supports a more even-looking tone', 'Encourages surface renewal'], whatToExpect: 'Temporary dryness or peeling can occur. Sunscreen and dermatologist-directed aftercare are essential.' },
  'mole-removal': {
    title: 'Mole Removal', category: 'Skin Treatment', image: 'images/wart_removal.webp',
    lead: 'Moles are common, usually harmless skin growths made up of pigment-producing cells (melanocytes). Removal — often using electrocautery — is quick, done under local anaesthetic, and typically leaves a wound that heals within a week or two.',
    benefits: ["Done under local anaesthetic, so the removal itself isn't painful", 'Quick, precise removal — often completed in a single visit', 'Clears unsightly or irritating moles for smoother-looking skin', 'A doctor can assess whether a mole needs closer attention'],
    whoFor: "Anyone with a mole that's grown, changed shape or colour, become itchy or painful, or that they'd simply like removed for cosmetic reasons.",
    whatToExpect: 'A local anaesthetic numbs the area first, so the removal itself is not painful; deeper moles may need a stitch. The wound typically heals within one to two weeks.',
    blogSlug: 'moles-warts-skin-tags-corns', blogTitle: 'Moles, Warts, Skin Tags & Corns — How to Tell Them Apart'
  },

  // ---- Skin: simple cards (no matching brochure content found yet — description only) ----
  acne: { title: 'Acne', category: 'Skin Treatment', image: 'images/acne.webp', lead: 'Targeted treatment for active breakouts and inflammation.' },
  'eczema-psoriasis': { title: 'Eczema & Psoriasis Care', category: 'Skin Treatment', image: 'images/eczema.webp', lead: 'Ongoing management for chronic skin conditions.' },
  'cryotherapy-keloid': { title: 'Cryotherapy for Keloid', category: 'Skin Treatment', image: 'images/keloid.webp', lead: 'Freezing therapy to flatten and reduce stubborn keloid scars.' },
  'fungal-infections': { title: 'Fungal Infections', category: 'Skin Treatment', image: 'images/fungal_infection.webp', lead: 'Fast, effective care for stubborn fungal skin issues.' },
  xanthelasma: { title: 'Xanthelasma', category: 'Skin Treatment', image: 'images/xanthelasma_.webp', lead: 'Removal of yellowish cholesterol deposits around the eyelids.' },
  'earlobe-piercing': { title: 'Disposable Earlobe Piercing Units', category: 'Skin Treatment', image: 'images/ear_piercing.webp', lead: 'A body modification creating a hole in the earlobe or cartilage to insert jewelry, using sterile, single-use piercing units.' },
  'earlobe-stitched': { title: 'Earlobe Stitched', category: 'Skin Treatment', image: 'images/ear_stitching_.webp', lead: 'A minor, roughly 30-minute outpatient procedure used to mend torn, split or stretched earlobes caused by heavy earrings or gauges.' },
  pigmentation: {
    title: 'Pigmentation & Hyperpigmentation', category: 'Cosmetic Treatment', image: 'images/pigmentation.webp',
    lead: 'Pigmentation is skin that appears darker than the skin around it, caused by excess melanin. The right treatment depends heavily on what caused it — sun damage responds differently to treatment than hormonal pigmentation like melasma.',
    benefits: ['Improves skin texture & tone', 'Fades brown spots and sun damage', 'Brightens overall complexion', 'Can also help reduce pore size and broken facial veins'],
    whoFor: "Best suited to pigmentation caused by sun damage — light-based treatments like IPL are generally not recommended for melasma (hormonal pigmentation) or for darker skin tones. Your treatment plan is chosen based on what's actually causing the pigmentation.",
    whatToExpect: 'Most people need one to three sessions for sun-damage pigmentation, with results building gradually. Melasma tends to fade with time and good sun protection rather than disappearing completely with any single treatment — so ongoing sun protection is part of managing it.',
    blogSlug: 'pigmentation-and-melasma', blogTitle: 'Pigmentation & Melasma — What Actually Works'
  },
  'chemical-peels': {
    title: 'Chemical Peels', category: 'Cosmetic Treatment', image: 'images/peels.webp',
    lead: "A chemical peel uses a controlled acid solution to exfoliate the skin's outer layer, revealing smoother, more even-toned skin beneath. We offer different peel strengths suited to different skin concerns and sensitivities.",
    benefits: ['Reduces fine lines and improves skin tone & texture', 'Fades pigmentation and brown spots', 'Loosens congestion and blackheads', 'Gentler options available for sensitive skin'],
    whoFor: 'Good for dullness, mild pigmentation, acne-prone skin or early signs of ageing — the acid and strength used is matched to how sensitive your skin is.',
    whatToExpect: 'Mild redness immediately afterward is normal; skin looks hydrated and refreshed within 24–48 hours. Sun protection is important afterward, as freshly peeled skin is more sensitive to UV.',
    blogSlug: 'understanding-chemical-peels', blogTitle: 'Understanding Chemical Peels — Which Strength Is Right for You?'
  },
  'gfc-facial': {
    title: 'GFC Facial', category: 'Cosmetic Treatment', image: 'images/gfcfacial.webp',
    lead: "GFC (Growth Factor Concentrate) Facial uses the same concentrated growth-factor technology behind our GFC hair treatment, applied to facial skin instead of the scalp — a non-surgical way to stimulate collagen and cell renewal.",
    benefits: ['Improves skin texture', 'Stimulates collagen production', 'Helps fade acne scars and sun damage', 'Brightens overall complexion']
  },

  // ---- Additional Hair cards ----
  qr678: {
    title: 'QR 678 PREO', category: 'Hair Treatment', image: 'images/qr678.webp',
    lead: 'An injectable hair-restoration therapy formulated with growth-supporting peptides and factors for selected forms of non-scarring hair loss.',
    causes: 'It may be considered when follicles are miniaturising because of pattern hair loss, hormonal sensitivity or progressive thinning.',
    treatment: 'After a scalp diagnosis, small amounts are injected across selected thinning areas in a clinician-planned course. The number and spacing of sessions depend on the diagnosis and response.',
    benefits: ['May reduce excessive shedding', 'Supports thicker-looking hair', 'Targets selected thinning areas', 'Non-surgical treatment']
  },
  dutoxome: {
    title: 'Dutoxome Hair Growth Therapy', category: 'Hair Treatment', image: 'images/dutexome.webp',
    lead: 'A customised scalp-infusion approach combining selected growth-supporting ingredients for androgen-related thinning.',
    causes: 'Androgenetic alopecia occurs when genetically sensitive follicles gradually miniaturise under the influence of androgens such as DHT.',
    treatment: 'A dermatologist first confirms the diagnosis and reviews contraindications before selecting the formulation, delivery method and session plan.',
    benefits: ['Targets androgen-related thinning', 'Supports follicle activity', 'May improve density and shaft quality', 'Customised to the scalp diagnosis']
  },
  'laser-helmet': {
    title: 'Laser Helmet for Hair Growth', category: 'Hair Treatment', image: 'images/laser_helmet.webp',
    lead: 'Low-level light therapy uses non-thermal red light to support cellular activity around hair follicles.',
    causes: 'It may be recommended when follicles are weakened or miniaturising in pattern hair loss but are still capable of producing hair.',
    treatment: 'The scalp is exposed to a prescribed low-level light dose for repeated sessions. It is usually combined with medical treatment when appropriate.',
    benefits: ['Non-invasive and painless', 'May reduce shedding', 'May support thicker hair', 'No procedural downtime']
  },
  'hair-mesotherapy': {
    title: 'Hair Mesotherapy', category: 'Hair Treatment', image: 'images/hair_meso.webp',
    lead: 'A scalp procedure that delivers a clinician-selected solution through multiple superficial micro-injections.',
    causes: 'It may be considered when thinning is associated with follicle miniaturisation or when a diagnosed scalp condition may benefit from targeted supportive therapy.',
    treatment: 'The scalp is assessed and cleaned before small injections are placed in selected areas. Ingredients and session plans vary and should be explained before treatment.',
    benefits: ['Targeted delivery to the scalp', 'Supports follicle nourishment', 'May reduce shedding', 'Can complement a broader hair-loss plan']
  },
  'alopecia-areata': {
    title: 'Alopecia Areata', category: 'Hair Treatment', image: 'images/alopecia.webp',
    lead: 'Alopecia areata is an autoimmune condition that causes sudden, usually smooth patches of hair loss.',
    causes: 'The immune system mistakenly attacks growing hair follicles. Genetics and immune triggers contribute, although the exact trigger is often unclear.',
    treatment: 'Treatment depends on age, extent and activity and may include topical medicines, carefully placed corticosteroid injections or other immune-directed therapy.',
    benefits: ['Controls active inflammation', 'Supports regrowth in affected patches', 'Reduces progression in suitable cases', 'Provides diagnosis and monitoring']
  },
  'dandruff-scalp': {
    title: 'Dandruff & Scalp Treatment', category: 'Hair Treatment', image: 'images/dandruff.webp',
    lead: 'Clinical scalp care for recurring flakes, itching, oiliness and irritation.',
    causes: 'Dandruff commonly involves seborrhoeic dermatitis, scalp oil, sensitivity and normal yeast; psoriasis, eczema, contact allergy or infection can look similar.',
    treatment: 'After examination, treatment may include a medicated shampoo, short-term scalp medicine and changes to cleansing or product use.',
    benefits: ['Reduces visible flakes', 'Relieves itching and irritation', 'Controls excess scale and oil', 'Helps identify other scalp disorders']
  },
  'hair-loss-management': {
    title: 'Hair Loss Management', category: 'Hair Treatment', image: 'images/hairloss_management.webp',
    lead: 'A diagnosis-led plan combining scalp care, medicine, procedures, nutrition and monitoring as appropriate.',
    causes: 'Hair loss may result from genetics, hormones, stress, illness, nutritional deficiency, autoimmune disease, medicines, scalp inflammation or damaging hair practices.',
    treatment: 'The clinician identifies the pattern and contributing factors before selecting blood tests, topical or oral medicines, procedures and follow-up photography.',
    benefits: ['Treats the underlying cause', 'May slow shedding', 'Supports regrowth where follicles remain active', 'Tracks progress over time']
  },

  // ---- Laser cards ----
  'laser-hair-reduction': {
    title: 'Laser Hair Reduction', category: 'Laser Treatment', image: 'images/laser_hair_removal.webp',
    lead: 'Light energy targets pigment in actively growing hair follicles to produce long-term reduction in hair density and thickness.',
    causes: 'It is chosen for unwanted facial or body hair. Genetics, hormones, medicines or conditions such as PCOS can influence the amount and recurrence of growth.',
    treatment: 'Hair is shaved rather than plucked, skin type and hair colour are assessed, and suitable laser settings are used over multiple growth-cycle sessions.',
    benefits: ['Long-term hair reduction', 'Finer and slower regrowth', 'Fewer ingrown hairs', 'Treats multiple face and body areas']
  },
  'excimer-laser': {
    title: 'Excimer Laser', category: 'Laser Treatment', image: 'images/excimer_l.webp',
    lead: 'A focused ultraviolet treatment that delivers light only to selected patches of affected skin.',
    causes: 'It may be recommended for localised inflammatory or pigmentary conditions such as vitiligo or psoriasis, which involve immune-driven changes in the skin.',
    treatment: 'A dermatologist confirms the diagnosis and delivers a controlled UV dose to the patches while limiting exposure to surrounding skin.',
    benefits: ['Targets small or difficult areas', 'Limits exposure of unaffected skin', 'May support repigmentation in vitiligo', 'May reduce psoriasis plaques']
  },
  'co2-laser': {
    title: 'CO2 Laser', category: 'Laser Treatment', image: 'images/co2.webp',
    lead: 'An ablative resurfacing laser that creates controlled micro-injuries to renew the surface and stimulate collagen remodelling.',
    causes: 'It may be chosen for acne scars, rough texture, enlarged pores, selected growths or visible photoageing caused by collagen loss and skin injury.',
    treatment: 'Treatment depth is selected after assessment. Anaesthesia, eye protection, wound care, recovery time and strict sun protection are discussed beforehand.',
    benefits: ['Improves scar texture', 'Stimulates collagen renewal', 'Softens fine lines', 'Refines uneven skin texture']
  },
  hifu: {
    title: 'High Intensity Focused Ultrasound (HIFU)', category: 'Laser & Energy Treatment', image: 'images/hifu.webp',
    lead: 'Focused ultrasound heats precise tissue depths to support collagen contraction and gradual remodelling without surgery.',
    causes: 'It may be recommended when age-related collagen loss produces mild-to-moderate skin laxity along the face, jawline, neck or selected body areas.',
    treatment: 'The clinician maps the area and delivers ultrasound lines at selected depths. Results develop gradually as collagen remodels.',
    benefits: ['Non-surgical lifting support', 'Improves mild skin laxity', 'Gradual natural-looking change', 'Minimal surface downtime']
  },
  'rf-skin-tightening': {
    title: 'Skin Tightening by Radio Frequency', category: 'Laser & Energy Treatment', image: 'images/radio_freq.webp',
    lead: 'Radiofrequency energy produces controlled tissue heating to support collagen remodelling and firmer-looking skin.',
    causes: 'It may be chosen when ageing, weight change or reduced collagen and elastin cause mild looseness or crepey texture.',
    treatment: 'Energy and temperature are adjusted to the body area and skin response, usually over a planned series of sessions.',
    benefits: ['Supports firmer-looking skin', 'Improves mild laxity', 'Non-surgical treatment', 'Little procedural downtime']
  },
  'freckles-removal': {
    title: 'Freckles Removal', category: 'Laser Treatment', image: 'images/freckle_Removal.webp',
    lead: 'Pigment-targeting treatment used to fade selected freckles and sun spots after diagnosis.',
    causes: 'Freckles occur when genetically prone skin produces more visible melanin after ultraviolet exposure.',
    treatment: 'After confirming that spots are benign, the dermatologist may use pigment laser, light treatment, peels or topical care alongside sunscreen.',
    benefits: ['Fades selected freckles', 'Improves uneven tone', 'Targets visible pigment', 'Supports a clearer complexion']
  },
  'q-switch-laser': {
    title: 'Q-Switch Laser', category: 'Laser Treatment', image: 'images/Q_Switch_laser.webp',
    lead: 'A laser that releases very short, high-energy pulses to fragment selected pigment or tattoo ink.',
    causes: 'It is chosen when unwanted pigment is present because of sun exposure, some birthmarks, post-inflammatory change or tattoo ink.',
    treatment: 'The wavelength and settings are matched to pigment colour, depth and skin tone. Several sessions and careful aftercare may be required.',
    benefits: ['Targets selected pigmentation', 'Can fade tattoo ink', 'Treats pigment at different depths', 'Minimal effect on surrounding skin when appropriately selected']
  },
  'stretchmarks-removal': {
    title: 'Stretchmarks Removal', category: 'Laser Treatment', image: 'images/stretchmarks.webp',
    lead: 'Collagen-stimulating procedures can soften the colour and texture of stretch marks, although they cannot erase them completely.',
    causes: 'Stretch marks form when skin stretches rapidly during growth, pregnancy, weight change, muscle gain or corticosteroid exposure, disrupting deeper collagen and elastin.',
    treatment: 'The plan may use fractional laser, MNRF, microneedling or topical care depending on colour, age, skin tone and location.',
    benefits: ['Softens visible texture', 'May reduce redness or contrast', 'Stimulates collagen remodelling', 'Improves overall skin appearance']
  },
  'lip-lightening': {
    title: 'Lip Lightening', category: 'Laser Treatment', image: 'images/lip.webp',
    lead: 'A dermatologist-led plan to reduce selected acquired lip pigmentation while protecting the delicate lip surface.',
    causes: 'Darkening may relate to natural skin tone, sun, smoking, irritation, lip licking, allergy, medicines or an underlying medical condition.',
    treatment: 'The cause is addressed first; suitable cases may use gentle topical care, superficial procedures or carefully selected pigment laser.',
    benefits: ['Improves uneven pigmentation', 'Targets selected dark areas', 'Supports a more even lip tone', 'Includes cause-based prevention advice']
  },
  mnrf: {
    title: 'MNRF (Microneedling Radio Frequency)', category: 'Laser & Energy Treatment', image: 'images/mnrf.webp',
    lead: 'Insulated or non-insulated microneedles deliver radiofrequency energy at controlled depths to stimulate collagen remodelling.',
    causes: 'It may be recommended when acne injury, ageing or collagen loss causes scars, enlarged pores, uneven texture or mild laxity.',
    treatment: 'After numbing, the device creates controlled channels and delivers RF energy. Depth and intensity are adjusted to the concern and skin type.',
    benefits: ['Improves acne-scar texture', 'Refines enlarged pores', 'Supports skin tightening', 'Stimulates collagen with limited surface injury']
  },
  'tattoo-removal': {
    title: 'Tattoo Removal', category: 'Laser Treatment', image: 'images/tattoo_removal.webp',
    lead: 'Laser pulses fragment tattoo pigment so the body can gradually clear smaller ink particles.',
    causes: 'Treatment is requested when a professional, cosmetic or amateur tattoo is no longer wanted; response varies with ink colour, depth and density.',
    treatment: 'A suitable wavelength is selected for the ink and skin tone. Sessions are spaced to allow healing and gradual pigment clearance.',
    benefits: ['Progressively fades unwanted ink', 'Targets multiple ink colours with suitable wavelengths', 'Non-surgical approach', 'Treatment tailored to tattoo characteristics']
  },

  // ---- Slimming cards ----
  'laser-lipolysis': {
    title: 'Laser Lipolysis', category: 'Slimming Treatment', image: 'images/laser_lipolysis.webp',
    lead: 'A body-contouring procedure that uses laser energy to disrupt selected localised fat and may support skin contraction.',
    causes: 'It may be chosen for stubborn fat pockets that remain despite stable weight, nutrition and activity; it is not a treatment for obesity.',
    treatment: 'After medical screening, the clinician marks the area and selects a minimally invasive or non-invasive technique appropriate to the device and concern.',
    benefits: ['Targets localised fat pockets', 'Supports body contouring', 'May support skin tightening', 'Smaller recovery burden than surgical liposuction in selected cases']
  },
  'weight-management': {
    title: 'Weight Management & Diet Plans', category: 'Slimming Treatment', image: 'images/weightloss.webp',
    lead: 'A personalised plan built around nutrition, activity, sleep, medical history and measurable health goals.',
    causes: 'Weight gain can involve energy imbalance, genetics, sleep, stress, medicines, hormones, medical conditions and environmental factors.',
    treatment: 'Assessment may include body composition, diet and activity review and clinically indicated tests, followed by a sustainable food and movement plan.',
    benefits: ['Supports gradual fat loss', 'Improves nutrition habits', 'Builds sustainable routines', 'Tracks weight and body-composition progress']
  },
  'cryo-lipolysis': {
    title: 'Cryo Lipolysis', category: 'Slimming Treatment', image: 'images/cryo.webp',
    lead: 'A non-surgical body-contouring procedure that cools selected subcutaneous fat under controlled conditions.',
    causes: 'It may be considered for pinchable, localised fat pockets that persist despite otherwise stable weight and healthy habits.',
    treatment: 'An applicator cools the selected area for a controlled period after suitability and contraindications are reviewed. Change develops gradually.',
    benefits: ['Non-surgical fat reduction', 'Targets selected body areas', 'No incisions', 'Gradual contour improvement']
  },
  'ems-sculpt': {
    title: 'EMS Sculpt', category: 'Slimming Treatment', image: 'images/ems.webp',
    lead: 'Electromagnetic stimulation produces repeated muscle contractions to support tone and definition in selected areas.',
    causes: 'It may be chosen when a patient wants additional muscle conditioning alongside regular exercise and nutrition.',
    treatment: 'Applicators are positioned over the target muscle group and intensity is increased within comfort and safety limits over a session plan.',
    benefits: ['Supports muscle tone', 'Improves visible definition', 'Non-invasive sessions', 'Complements exercise-based conditioning']
  },
  'sauna-belt': {
    title: 'Sauna Belt', category: 'Slimming Treatment', image: 'images/sauna_belt.webp',
    lead: 'Supervised local heat therapy intended to promote warmth, perspiration, circulation and temporary relaxation.',
    causes: 'It is used as a supportive wellness treatment for muscle relaxation and temporary fluid-related changes, not as a method that destroys body fat.',
    treatment: 'A protective layer is placed between skin and the heat wrap, temperature is monitored and hydration and session time are controlled.',
    benefits: ['Promotes muscle relaxation', 'Supports temporary perspiration', 'Provides controlled warmth', 'May complement a broader wellness plan']
  },
  'electronic-muscle-stimulation': {
    title: 'Electronic Muscle Stimulation', category: 'Slimming Treatment', image: 'images/ems_.webp',
    lead: 'Surface electrodes deliver controlled electrical signals that repeatedly contract and relax selected muscles.',
    causes: 'It may be chosen to support muscle activation and toning when appropriate; it does not independently correct the causes of weight gain.',
    treatment: 'Pads are placed over selected muscles and intensity is adjusted to produce visible but tolerable contractions after contraindication screening.',
    benefits: ['Supports muscle activation', 'May improve tone and firmness', 'Targets selected muscle groups', 'Non-invasive treatment']
  },
  'body-contouring': {
    title: 'Body Contouring', category: 'Slimming Treatment', image: 'images/bodycontouring.webp',
    lead: 'A personalised combination of non-surgical treatments used to improve the outline of selected body areas.',
    causes: 'It may be considered for localised fat, mild skin laxity or limited muscle definition after weight, lifestyle and medical factors are assessed.',
    treatment: 'The clinician may combine suitable technologies with nutrition and activity guidance according to body composition, skin quality and goals.',
    benefits: ['Targets specific body areas', 'Improves visible contour', 'Can address fat, skin or muscle concerns', 'Personalised non-surgical plan']
  }
};

// Verified, card-specific patient education. These entries replace the short
// brochure summaries above with fuller cause- and treatment-based explanations.
// Where evidence or protocols are not standardised, that limitation is stated.
const VERIFIED_TREATMENT_DETAILS = {
  prp: {
    lead: 'Platelet-rich plasma (PRP) is prepared from a patient\'s own blood by centrifugation, then injected into diagnosed thinning areas. Platelets release signalling proteins that may support follicles that are still alive but miniaturising.',
    causes: 'PRP is most often considered for androgenetic (pattern) hair loss, in which inherited sensitivity to androgens gradually shortens the growth phase and miniaturises follicles. It does not correct unrelated causes such as iron deficiency, thyroid disease, scarring alopecia or active autoimmune inflammation, so diagnosis comes first.',
    treatment: 'Blood is drawn, processed to concentrate platelets and injected into a cleaned, numbed scalp using sterile technique. Protocols vary because preparation methods are not fully standardised. A course followed by reassessment is common; PRP may complement minoxidil or other diagnosis-specific therapy rather than replace it.',
    benefits: ['Uses an autologous preparation from the patient\'s own blood', 'May reduce shedding in selected pattern hair loss', 'May improve density and shaft thickness where follicles remain viable', 'Non-surgical with short recovery for most patients']
  },
  gfc: {
    lead: 'Growth Factor Concentrate (GFC) is an autologous platelet-derived preparation designed to collect growth factors released from a patient\'s platelets before the concentrate is placed into thinning scalp areas.',
    causes: 'It is mainly offered for non-scarring pattern hair loss caused by progressive follicle miniaturisation. Diffuse shedding from illness, nutritional deficiency, medicines, thyroid disease or autoimmune hair loss requires separate evaluation and treatment.',
    treatment: 'The clinician draws and processes blood with a specific collection system, then injects the prepared concentrate into selected scalp areas. GFC protocols and products vary, and comparative evidence against standard PRP is still limited; response should be documented with photographs and follow-up.',
    benefits: ['Autologous treatment using the patient\'s own blood components', 'May support follicles affected by pattern thinning', 'May reduce shedding and improve visible density in selected patients', 'Non-surgical procedure with limited downtime']
  },
  pdo: {
    lead: 'PDO scalp threading places fine absorbable polydioxanone sutures beneath selected thinning areas. The proposed effect is a local wound-healing response and improved tissue support around follicles.',
    causes: 'This procedure is promoted for early non-scarring thinning, especially pattern hair loss caused by genetically driven follicle miniaturisation. It cannot create new follicles in scarred or completely bald skin and does not treat nutritional, thyroid or autoimmune causes.',
    treatment: 'After diagnosis and local anaesthesia, sterile absorbable threads are inserted in a planned scalp pattern. Published evidence is limited compared with established treatments such as minoxidil, so benefits, alternatives, infection risk and uncertain durability should be discussed before proceeding.',
    benefits: ['Non-surgical and uses absorbable threads', 'May provide supportive stimulation where follicles remain active', 'Can be combined with diagnosis-based medical therapy', 'Usually involves limited recovery, although tenderness or swelling can occur']
  },
  'acne-scars': {
    lead: 'Acne scars are permanent textural changes left after inflammatory acne. They may be depressed (ice-pick, boxcar or rolling), raised, or accompanied by flat red or brown post-acne marks that require different treatment.',
    causes: 'Deep inflammation damages the follicle wall and surrounding dermis. Too little collagen during healing produces depressed scars; excess collagen produces raised scars. Picking lesions, delayed acne control and severe nodular acne increase risk.',
    treatment: 'Active acne is controlled first. Treatment is matched to scar type and may combine subcision, microneedling, chemical reconstruction, fractional laser, MNRF, peels, fillers or minor scar surgery. Flat pigmentation is treated differently from true indentations.',
    benefits: ['Softens depressed or raised scar appearance', 'Improves uneven texture and shadowing', 'Stimulates collagen remodelling with selected procedures', 'A combination plan can target different scar types']
  },
  'oxygeno-facial': {
    lead: 'OxyGeno is a multi-step facial that combines surface exfoliation, a temporary oxygenating reaction and ultrasound-assisted application of topical serums; some platforms also include radiofrequency.',
    causes: 'It may be recommended for temporary dullness, dehydration, rough surface texture or mild uneven tone caused by dead-cell buildup, reduced hydration and environmental exposure. It does not treat the underlying cause of medical pigmentation, eczema or active inflammatory acne.',
    treatment: 'Skin is cleansed, exfoliated with the device\'s treatment capsule or gel, and then treated with selected serums and ultrasound; RF is used only when suitable. Products and energy settings are chosen for the patient, and active rash, infection or broken skin should be treated first.',
    benefits: ['Removes superficial dead-cell buildup', 'Improves short-term hydration and smoothness', 'Can give a temporarily brighter appearance', 'Non-surgical treatment with little downtime for suitable skin']
  },
  'medi-facial': {
    lead: '“Medi facial” is an umbrella term for a clinician-selected facial using medical-grade skincare and, when appropriate, technologies such as hydradermabrasion, superficial peels, ultrasound, LED or radiofrequency.',
    causes: 'It may be recommended when dullness, dehydration, congestion, superficial pigmentation or early photoageing requires more targeted care than a standard salon facial. Persistent acne, melasma, rosacea or dermatitis needs a diagnosis-specific plan.',
    treatment: 'The clinician assesses skin type, barrier condition and the main concern, then selects compatible steps rather than using one fixed protocol. Treatment may include cleansing, exfoliation, extraction, a peel or device-assisted serum application, followed by moisturiser and sunscreen.',
    benefits: ['Customised to the patient\'s skin condition', 'Can improve hydration and superficial texture', 'May reduce congestion and surface dullness', 'Allows controlled use of clinical products and devices']
  },
  hydrafacial: {
    lead: 'HydraFacial is a branded hydradermabrasion treatment that combines fluid-based exfoliation, suction-assisted extraction and application of hydrating topical solutions in one session.',
    causes: 'It may be recommended for dehydration, surface roughness, oil and debris within pores, or a dull appearance. These concerns can arise from barrier disruption, excess sebum, comedones, weather and product buildup; the procedure does not cure hormonal acne or melasma.',
    treatment: 'After assessment, the handpiece cleanses and exfoliates, loosens and suctions superficial debris, and applies selected serums. Acid strength, suction and boosters should be modified for sensitive skin, rosacea, active acne or recent procedures.',
    benefits: ['Combines exfoliation, extraction and hydration', 'Can make skin feel smoother and more hydrated', 'May temporarily improve visible congestion and dullness', 'Usually requires little downtime when appropriately selected']
  },
  'photo-facial': {
    lead: 'A photofacial uses intense pulsed light (IPL), a filtered broad spectrum of light rather than a single-wavelength laser, to target selected brown pigment or visible blood vessels.',
    causes: 'Sun exposure can produce freckles and lentigines, while dilated superficial vessels contribute to redness. Melasma is biologically different and may worsen with heat or light, especially in darker skin tones.',
    treatment: 'The clinician confirms the lesion is benign, records skin type, reviews tanning and photosensitising medicines, provides eye protection and selects filters and pulse settings. Several spaced sessions may be required; sunscreen and heat avoidance reduce complications.',
    benefits: ['Can fade selected sun spots and freckles', 'May reduce visible superficial vessels and redness', 'Can improve overall uneven tone from photodamage', 'Treats a broad facial area without ablative resurfacing']
  },
  'diamond-facial': {
    lead: 'Diamond-tip skin polishing is a form of microdermabrasion in which a controlled abrasive tip and suction remove part of the outer dead-cell layer.',
    causes: 'It is used for dullness, mild roughness and superficial uneven tone related to compacted dead cells and environmental exposure. It cannot correct deep acne scars, active inflammation or pigment located deeper in the skin.',
    treatment: 'The clinician passes a sterile diamond-tip handpiece over cleansed skin with suction adjusted to skin sensitivity. Calming moisturiser and sunscreen follow. Active infection, open wounds, inflamed acne or a severely impaired barrier should be treated before polishing.',
    benefits: ['Gently exfoliates superficial dead cells', 'Can make skin feel smoother immediately', 'May improve temporary brightness and product penetration', 'Non-invasive with minimal downtime']
  },
  'carbon-laser-facial': {
    lead: 'A carbon laser peel applies a thin carbon suspension and then uses a Q-switched laser to heat and fragment the carbon at the skin surface, producing controlled photoacoustic exfoliation.',
    causes: 'It may be recommended for oily, congested or dull-looking skin where excess sebum, comedonal debris and surface buildup are prominent. It does not remove the hormonal or inflammatory drivers of acne and is not a definitive melasma treatment.',
    treatment: 'Skin is cleansed, carbon is applied and allowed to dry, then laser passes are delivered with eye protection and skin-type-appropriate settings. Active infection, recent tanning and photosensitising medicines require screening; gentle care and sunscreen follow.',
    benefits: ['Provides controlled surface exfoliation', 'May temporarily reduce oiliness and visible congestion', 'Can improve smoothness and brightness', 'Usually has limited downtime when suitable settings are used']
  },
  'omega-led-facial': {
    lead: 'LED photobiomodulation exposes the skin to low-intensity visible or near-infrared light. Different wavelengths are used as adjuncts for inflammation, acne or recovery; LED does not burn or resurface the skin like a laser.',
    causes: 'It may be recommended when acne-related inflammation, redness or post-procedure recovery could benefit from a non-thermal adjunct. The underlying acne, rosacea or pigmentation still needs its own medical treatment.',
    treatment: 'Clean skin is exposed to a selected wavelength and dose while eyes are protected. A course may be advised. Evidence and device output vary, so LED should be presented as supportive care rather than a stand-alone cure.',
    benefits: ['Non-invasive and generally painless', 'May support reduction of acne-related inflammation', 'May calm temporary redness after selected procedures', 'No ablative downtime']
  },
  'pumpkin-peel-facial': {
    lead: 'A pumpkin peel facial uses a formulated enzyme or acid blend derived partly from pumpkin to loosen superficial dead cells; the exact action depends on the product\'s acids, enzymes and concentration.',
    causes: 'It may be recommended for dullness, mild roughness, superficial congestion or uneven tone caused by dead-cell buildup and excess oil. “Natural” ingredients can still irritate sensitive or inflamed skin.',
    treatment: 'After cleansing and skin assessment, the peel is applied for a controlled contact time and neutralised or removed according to its formulation. Moisturiser and sunscreen follow; active dermatitis, infection or damaged skin should be treated first.',
    benefits: ['Provides superficial exfoliation', 'Can improve temporary brightness and smoothness', 'May help loosen mild surface congestion', 'Strength and contact time can be adjusted to the skin']
  },
  'acne-laser-facial': {
    lead: '“Acne laser facial” may refer to an IPL or light-based adjunct intended to reduce acne inflammation, redness or oil activity. The exact device and indication should be identified before treatment.',
    causes: 'Acne develops when follicles clog with sebum and dead cells, followed by inflammation involving Cutibacterium acnes and hormonal sensitivity. Light treatment does not correct every driver and is rarely the only therapy needed.',
    treatment: 'A dermatologist grades the acne and starts evidence-based skincare or medicines as needed. Suitable light treatment is then selected for active lesions or redness, with eye protection and conservative settings for the patient\'s skin tone.',
    benefits: ['May reduce selected inflammatory lesions', 'Can complement topical or oral acne treatment', 'May improve acne-associated redness', 'Offers a non-ablative procedural option for suitable patients']
  },
  'korean-glass-facial': {
    lead: 'A Korean Glass Facial is a clinic-defined multi-step facial designed to create a smooth, hydrated, reflective appearance through cleansing, gentle exfoliation, hydration and calming skincare.',
    causes: 'It may be chosen for dehydration, dullness, mild roughness or superficial congestion caused by barrier disruption, product buildup and environmental exposure. “Glass skin” is a cosmetic finish, not a medical diagnosis or permanent skin change.',
    treatment: 'The protocol is adapted to the skin and may include double cleansing, an enzyme or superficial peel, microdermabrasion, LED and a hydrating mask. Irritating steps are reduced or omitted for sensitive, acne-inflamed or recently treated skin.',
    benefits: ['Improves short-term hydration', 'Can make surface texture feel smoother', 'May create a brighter, dewy appearance', 'Customisable multi-step treatment']
  },
  'mandelic-peel-facial': {
    lead: 'A mandelic peel uses mandelic acid, an alpha-hydroxy acid with a relatively large molecular size, for controlled superficial chemical exfoliation.',
    causes: 'It may be recommended for comedonal acne, post-acne marks, mild photodamage or uneven texture caused by follicular plugging and excess surface pigment. Sensitive skin can still react, despite mandelic acid often being considered gentler than smaller AHAs.',
    treatment: 'The clinician selects concentration, pH and contact time, applies the peel to cleansed skin, then neutralises or removes it as required. Retinoids and other irritants may need to be paused; sunscreen and bland moisturiser are essential afterward.',
    benefits: ['Loosens superficial dead cells and comedonal buildup', 'May improve mild post-acne pigmentation', 'Can refine surface texture and brightness', 'Offers a relatively gradual superficial peel option']
  },
  'rf-antiaging-facial': {
    lead: 'A radiofrequency facial uses controlled electrical energy to heat deeper tissue while protecting the surface, triggering temporary collagen contraction and gradual remodelling.',
    causes: 'It may be recommended for mild laxity and fine lines caused by age- and sun-related loss and disorganisation of collagen and elastin. It cannot reproduce a surgical lift or remove substantial excess skin.',
    treatment: 'Conductive gel and an RF handpiece are used while temperature, contact and patient comfort are monitored. A series may be planned. Pacemakers, implanted electronic devices, metal in the area and some medical conditions require exclusion.',
    benefits: ['May improve mild skin laxity', 'Supports gradual collagen remodelling', 'Non-surgical with limited surface downtime', 'Can improve a firmer-looking texture in suitable patients']
  },
  'vitc-citrus-peel-facial': {
    lead: 'This brightening facial combines a formulated superficial acid peel with topical vitamin C or antioxidant products; effectiveness depends on the actual acids, concentration, pH and stability of the vitamin C preparation.',
    causes: 'It may be chosen for dullness, tanning and superficial uneven tone caused by ultraviolet exposure and excess melanin. Hormonal melasma and post-inflammatory pigmentation require cause-based treatment and strict photoprotection.',
    treatment: 'After diagnosis and skin preparation, a clinician applies the selected peel for a controlled time, removes or neutralises it, and follows with compatible antioxidant, moisturiser and sunscreen. Irritation is avoided because inflammation can deepen pigmentation.',
    benefits: ['Provides controlled superficial exfoliation', 'Can improve temporary brightness', 'May fade selected superficial dark marks over a course', 'Combines exfoliation with topical antioxidant support']
  },
  'vampire-facial': {
    lead: 'A “vampire facial” commonly combines microneedling with autologous platelet-rich plasma (PRP). Microneedling creates controlled channels while platelet-derived signals are intended to support healing.',
    causes: 'It may be recommended for acne-scar texture, enlarged pores or early photoageing caused by collagen loss or dermal injury. It does not treat active acne, and PRP cannot replace scar-specific procedures when deep tethering is present.',
    treatment: 'Blood is drawn and processed, skin is disinfected and numbed, and sterile microneedling is performed at a depth selected for the concern. Combining microneedling devices with PRP has not been reviewed for safety or effectiveness by the US FDA, so consent should address evidence limits and infection-control standards.',
    benefits: ['Stimulates collagen through controlled microneedling injury', 'May soften selected acne-scar texture', 'Uses autologous platelet concentrate', 'Can improve texture and fine lines gradually']
  },
  'fire-ice-facial': {
    lead: 'The Fire & Ice or Red Carpet Facial is a clinic-defined two-stage treatment: an intensive resurfacing mask or superficial peel (“fire”) followed by a cooling, soothing and hydrating mask (“ice”).',
    causes: 'It may be chosen for short-term dullness, rough surface texture or congestion related to dead-cell buildup. The stronger first step can irritate sensitive, inflamed or recently treated skin and is not a cure for acne or pigmentation disorders.',
    treatment: 'After skin assessment, the resurfacing formulation is applied for a carefully timed interval, removed, and followed with the cooling mask, moisturiser and sunscreen. Acid strength and contact time must match skin tone, barrier health and prior procedures.',
    benefits: ['Provides controlled superficial resurfacing', 'Can improve temporary smoothness and brightness', 'Cooling phase helps soothe and rehydrate the surface', 'Often selected when limited downtime is desired']
  },
  'ozone-high-frequency-facial': {
    lead: 'A high-frequency facial uses a glass electrode carrying a low-current alternating electrical signal; some devices produce a small amount of ozone at the electrode surface. Clinical evidence for broad “detox” or oxygenation claims is limited.',
    causes: 'It may be offered as an adjunct for oily or acne-prone skin, but acne is caused by follicular plugging, sebum, inflammation and bacterial activity—not by a simple lack of oxygen. Medical acne still requires evidence-based treatment.',
    treatment: 'The electrode is moved over dry, intact skin for a short controlled session. It is avoided around flammable products and in patients with relevant implanted electrical devices, seizure disorders or other contraindications specified for the device.',
    benefits: ['Non-invasive adjunct with a mild warming effect', 'May temporarily improve surface circulation', 'May support drying of selected superficial acne lesions', 'Usually involves no recovery time when safely performed']
  },
  'collagen-facial': {
    lead: 'A collagen facial is primarily a hydrating treatment using humectants, emollients, masks and sometimes device-assisted steps to make dry skin look temporarily plumper. Topical collagen itself does not replace lost dermal collagen.',
    causes: 'It may be recommended for dehydration and early fine lines caused by barrier water loss, age, ultraviolet exposure and reduced dermal collagen. Deeper laxity cannot be corrected by a topical mask alone.',
    treatment: 'Skin is gently cleansed and exfoliated, then treated with moisturising serums or masks selected for sensitivity. If collagen stimulation is the goal, the clinician may discuss evidence-based procedures such as microneedling, RF or laser separately.',
    benefits: ['Improves surface hydration', 'Temporarily softens dehydration lines', 'Can make skin feel smoother and more supple', 'Provides a gentle option for many dry-skin patients']
  },
  'dermaplaning-facial': {
    lead: 'Dermaplaning is controlled mechanical exfoliation in which a trained clinician uses a sterile surgical blade at a shallow angle to remove surface corneocytes and fine vellus hair.',
    causes: 'It may be chosen for dullness, rough surface texture or visible peach fuzz. Removing vellus hair does not make it grow back thicker; active pustular acne, infection and a damaged barrier increase the risk of irritation.',
    treatment: 'Clean, dry skin is held taut while the sterile blade is passed in controlled strokes. Calming moisturiser and sunscreen follow. The procedure should be postponed over active acne, cold sores, open wounds or inflamed dermatitis.',
    benefits: ['Immediate surface smoothing', 'Removes fine vellus hair temporarily', 'Can improve makeup application', 'Chemical-free exfoliation option']
  },
  'laser-resurfacing-facial': {
    lead: 'Laser resurfacing uses ablative or non-ablative light energy to create controlled thermal injury, stimulating re-epithelialisation and collagen remodelling at a depth selected for the concern.',
    causes: 'It may be recommended for acne scars, wrinkles, sun damage or uneven texture caused by dermal collagen injury and photoageing. Different problems and skin tones require different laser types; melasma can worsen with excessive heat.',
    treatment: 'The dermatologist selects wavelength, fractionation and energy after skin typing and medication review. Eye protection and anaesthesia are used as needed, followed by wound care, sun avoidance and monitoring for infection or pigment change.',
    benefits: ['Can improve acne-scar and surgical-scar texture', 'Stimulates collagen remodelling', 'May soften wrinkles and photodamage', 'Depth and density can be tailored to recovery tolerance']
  },
  'meso-magic-facial': {
    lead: 'Meso Magic is a clinic-defined facial intended to enhance delivery of selected hydrating or brightening solutions using superficial microinjections, electroporation or another mesotherapy-style method.',
    causes: 'It may be offered for dehydration, dullness or early fine lines, but these concerns have different causes such as barrier water loss, ultraviolet exposure and collagen decline. “Mesotherapy” protocols are not standardised across clinics.',
    treatment: 'The exact device, route and ingredients must be disclosed. Skin is assessed and disinfected, and only sterile products intended for that route should be used. Evidence, allergy risk, bruising, infection and alternatives should be discussed.',
    benefits: ['Targets selected hydration or radiance concerns', 'Protocol can be customised to compatible ingredients', 'May improve temporary plumpness and surface glow', 'Can complement—not replace—diagnosis-based skincare']
  },
  'micro-derma-peel-facial': {
    lead: 'A Micro Derma Peel combines mechanical microdermabrasion with a superficial chemical peel. Because both remove part of the outer barrier, the combined intensity must be chosen carefully.',
    causes: 'It may be considered for roughness, comedonal congestion, superficial post-acne marks or dullness caused by dead-cell buildup and uneven epidermal pigment. Inflamed acne, dermatitis and melasma-prone skin may be irritated by overly aggressive treatment.',
    treatment: 'The clinician assesses barrier strength, performs a controlled microdermabrasion pass and applies a compatible peel at a selected concentration and contact time. Moisturiser and strict sunscreen follow; retinoids and exfoliants may need to be paused.',
    benefits: ['Combines mechanical and chemical exfoliation', 'Can improve superficial roughness and brightness', 'May loosen comedonal congestion', 'Intensity can be modified to the patient\'s skin']
  },
  'advanced-skin-whitening-peel': {
    lead: 'An advanced brightening peel uses one or more clinician-selected acids to reduce excess superficial pigment and improve uneven tone. It should not be presented as changing a person\'s natural skin colour.',
    causes: 'Dark marks may result from ultraviolet exposure, acne or other inflammation, friction, medicines or hormonal melasma. Treating the trigger and daily photoprotection are essential; a peel alone cannot prevent recurrence.',
    treatment: 'The dermatologist diagnoses the pigmentation and selects acid, concentration, pH and contact time for the skin tone. Pre-treatment pigment control may be used, followed by neutralisation, barrier care and broad-spectrum sunscreen.',
    benefits: ['Fades selected superficial dark marks', 'Improves uneven-looking tone', 'Encourages controlled epidermal renewal', 'Can be combined with cause-based home treatment']
  },
  'mole-removal': {
    lead: 'Mole removal is the clinical removal of a melanocytic naevus for diagnostic, medical or cosmetic reasons. A changing lesion must be assessed for skin cancer before any destructive cosmetic procedure.',
    causes: 'Moles form when pigment-producing melanocytes grow in clusters. Genetics and sun exposure influence their number; most are benign, but change in size, shape, colour, symptoms or bleeding requires examination.',
    treatment: 'The dermatologist examines the lesion, often with dermoscopy. Suspicious moles are removed in a way that preserves tissue for histopathology; suitable benign raised moles may be shave-excised or surgically excised under local anaesthesia.',
    benefits: ['Provides diagnosis when tissue is tested', 'Removes a lesion that catches, bleeds or irritates', 'Can improve appearance of a suitable benign mole', 'Allows appropriate margins when a lesion is suspicious']
  },
  acne: {
    lead: 'Acne is an inflammatory disorder of the pilosebaceous unit that produces blackheads, whiteheads, papules, pustules, nodules and sometimes permanent scarring.',
    causes: 'Follicles become blocked by sebum and dead cells; Cutibacterium acnes and inflammation then contribute. Androgen sensitivity, genetics, occlusive products and some medicines can worsen acne. Dirt alone does not cause it.',
    treatment: 'Treatment is graded by severity and may include benzoyl peroxide, topical retinoids, azelaic acid, limited antibiotics, hormonal therapy or isotretinoin. Comedone extraction, peels or light procedures may be adjuncts; active acne should be controlled early to prevent scars.',
    benefits: ['Reduces new comedones and inflammatory lesions', 'Helps prevent acne scars and persistent marks', 'Controls oil and follicular blockage with appropriate therapy', 'Creates a maintenance plan to reduce relapse']
  },
  'eczema-psoriasis': {
    lead: 'Eczema and psoriasis are different chronic inflammatory skin diseases. Eczema often causes itchy, dry or oozing patches; psoriasis produces well-defined, thick, scaly plaques and may also affect joints.',
    causes: 'Atopic eczema involves skin-barrier weakness, immune dysregulation and triggers such as irritants or allergens. Psoriasis is an immune-mediated condition with genetic susceptibility; neither condition is contagious.',
    treatment: 'Diagnosis determines care. Moisturisers, trigger reduction and topical anti-inflammatory medicines are central for eczema. Psoriasis may need topical therapy, phototherapy, systemic tablets or biologic medicines; suspected infection and joint symptoms require review.',
    benefits: ['Relieves itch, scale and inflammation', 'Repairs and protects the skin barrier', 'Reduces flare frequency with maintenance care', 'Screens for infection or psoriatic arthritis when relevant']
  },
  'cryotherapy-keloid': {
    lead: 'Keloid cryotherapy uses extreme cold—often liquid nitrogen—to injure excessive scar tissue so that it gradually flattens. It may be surface-applied or delivered within the scar by a specialist technique.',
    causes: 'A keloid develops when wound healing produces collagen beyond the original injury boundary. Piercings, acne, surgery, burns and cuts can trigger it, especially in genetically susceptible and darker skin.',
    treatment: 'The dermatologist confirms that the scar is a keloid, then plans one or more freeze-thaw treatments. Cryotherapy is often combined with intralesional corticosteroid, silicone, pressure or laser. Blistering and pigment change are discussed before treatment.',
    benefits: ['Can reduce keloid height and firmness', 'May relieve itch or tenderness', 'Can improve response to steroid injections', 'Offers a non-excisional option for selected scars']
  },
  'fungal-infections': {
    lead: 'Superficial fungal infections include ringworm, athlete\'s foot, jock itch and some scalp or nail infections. Appearance varies by body site and can mimic eczema or psoriasis.',
    causes: 'Dermatophyte fungi spread through direct contact, infected animals, shared objects and warm moist environments. Sweating, occlusive clothing, diabetes and immune suppression increase risk. Steroid-combination creams can mask and worsen infection.',
    treatment: 'Diagnosis may be clinical or confirmed with scraping. Localised skin infection often responds to a topical antifungal; scalp, nail, widespread or resistant disease may require oral medication. Contacts, footwear, towels and pets may need attention to prevent reinfection.',
    benefits: ['Clears the causative fungal infection with appropriate therapy', 'Relieves itch, scale and inflammation', 'Reduces spread to other people or body sites', 'Prevents complications from delayed or incorrect steroid treatment']
  },
  xanthelasma: {
    lead: 'Xanthelasma consists of soft yellow cholesterol-rich plaques, usually near the inner eyelids. It is benign but may be cosmetically noticeable and can recur after removal.',
    causes: 'Lipid-laden cells collect within the superficial dermis. Xanthelasma may occur with high cholesterol, diabetes, thyroid or liver disease, but many patients have normal blood lipids.',
    treatment: 'The clinician confirms the diagnosis and may request a lipid and metabolic assessment. Suitable plaques can be treated with chemical cautery, electrosurgery, laser or surgical excision depending on size, depth and eyelid location.',
    benefits: ['Removes or reduces visible yellow plaques', 'Allows screening for associated lipid abnormalities', 'Treatment can be selected for plaque size and depth', 'May improve cosmetic appearance around the eyelids']
  },
  'earlobe-piercing': {
    lead: 'Disposable earlobe piercing uses a sterile, single-use cartridge or unit to create a controlled channel for jewellery. Cartilage piercing has different risks and should not be treated as identical to soft earlobe piercing.',
    causes: 'Piercing is elective rather than caused by disease. Problems can arise from nickel allergy, pressure, poor aftercare, infection, traumatic pulling or a personal tendency to form keloids.',
    treatment: 'The clinician checks skin health and keloid history, marks the site, uses sterile single-use equipment and inserts suitable jewellery. Written aftercare covers cleaning, avoiding unnecessary rotation or trauma, and warning signs of infection.',
    benefits: ['Controlled placement by trained staff', 'Single-use sterile equipment reduces cross-contamination risk', 'Site and jewellery can be selected for anatomy and allergy history', 'Professional aftercare helps reduce complications']
  },
  'earlobe-stitched': {
    lead: 'Earlobe repair is a minor surgical procedure used to close a partial or complete split, an elongated piercing hole, or an earlobe stretched by heavy jewellery or gauges.',
    causes: 'Repeated traction gradually lengthens the piercing tract; sudden pulling can tear it completely. Thin tissue, heavy earrings, gauges and prior infection increase risk.',
    treatment: 'Under local anaesthesia, the epithelialised edges are refreshed and the lobe is reconstructed with fine sutures. Wound care and suture removal are planned, and re-piercing—if desired—is delayed until healing is mature and placed away from the scar.',
    benefits: ['Restores a more natural earlobe contour', 'Closes a split or stretched piercing tract', 'Allows later re-piercing in suitable patients', 'Short outpatient procedure under local anaesthesia']
  },
  pigmentation: {
    lead: 'Hyperpigmentation is excess colour caused by increased melanin production or deposition. It includes sun spots, post-inflammatory marks and melasma, which look similar but respond differently to treatment.',
    causes: 'Ultraviolet and visible light, acne or injury, friction, medicines and hormones can stimulate melanocytes. Melasma is influenced by hormones, genetics, heat and light; inflammation from aggressive procedures can deepen pigment in darker skin.',
    treatment: 'The dermatologist identifies the pattern and trigger, then combines broad-spectrum sunscreen with suitable topical agents such as azelaic acid, retinoids or supervised pigment suppressors. Peels or devices are added cautiously; IPL is useful for selected sun spots but not reliably for melasma.',
    benefits: ['Targets the diagnosed cause rather than colour alone', 'Fades selected dark spots and patches', 'Prevents new pigment with photoprotection and trigger control', 'Improves overall evenness while reducing risk of rebound pigmentation']
  },
  'chemical-peels': {
    lead: 'A chemical peel applies a controlled acid solution to remove part of the epidermis and, with deeper peels, selected dermal layers. Peel depth determines the likely benefit, recovery and risk.',
    causes: 'Peels may be chosen for acne, superficial post-acne marks, roughness or photoageing caused by follicular blockage, excess epidermal pigment and sun-related skin change. They cannot correct every deep scar or the hormonal driver of melasma.',
    treatment: 'The clinician selects the acid, concentration, pH, contact time and preparation for the patient\'s skin tone and diagnosis. The peel is applied under observation, then removed or neutralised; aftercare focuses on barrier repair and strict sun protection.',
    benefits: ['Improves superficial texture and brightness', 'Can loosen comedones and support acne treatment', 'May fade selected epidermal pigmentation', 'Depth can be tailored to the concern and acceptable downtime']
  },
  'gfc-facial': {
    lead: 'A GFC facial uses an autologous concentrate of growth factors released from the patient\'s platelets, delivered by injection or another stated method to selected facial areas.',
    causes: 'It may be proposed for acne-scar texture or early photoageing caused by dermal collagen injury and age-related collagen decline. It cannot correct active acne, deep tethered scars or significant skin laxity by itself.',
    treatment: 'Blood is drawn and processed with a specific GFC system, then the concentrate is delivered using sterile technique. Preparation and delivery protocols vary, and evidence is less standardised than for established resurfacing procedures; realistic alternatives should be discussed.',
    benefits: ['Uses an autologous platelet-derived preparation', 'May support healing and collagen remodelling', 'Can complement a scar or rejuvenation plan', 'Non-surgical procedure with limited downtime for many patients']
  }
};

Object.entries(VERIFIED_TREATMENT_DETAILS).forEach(([slug, details])=>{
  Object.assign(TREATMENT_INFO[slug], details);
});

// Extra evidence and safety detail for treatments whose names, devices or
// regulatory status can otherwise be misunderstood by patients.
Object.assign(TREATMENT_INFO.dutoxome, {
  lead: 'Dutoxome Hair Growth Therapy is a clinic-defined scalp treatment that may combine dutasteride or other anti-androgen support with an exosome-labelled or growth-factor formulation. The exact ingredients, source, route and regulatory status must be identified before treatment because products sold under this name are not standardised.',
  causes: 'It is promoted mainly for androgenetic alopecia, where inherited sensitivity to dihydrotestosterone gradually shortens the growth phase and miniaturises follicles. Similar-looking shedding may instead result from iron or thyroid abnormalities, illness, medicines, autoimmune disease or scarring alopecia, so a scalp diagnosis is essential.',
  treatment: 'A dermatologist should confirm the hair-loss type, review pregnancy plans and medicine risks, and disclose every ingredient and delivery method. Dutasteride requires individual medical prescribing and counselling. Exosome products have not been approved by the US FDA, and clinical evidence and manufacturing quality are not standardised; established options such as minoxidil should be discussed.',
  benefits: ['May address androgen-driven miniaturisation when a suitable anti-androgen is prescribed', 'May be used as an adjunct for viable follicles rather than as a cure', 'Allows a formulation and plan tailored to a confirmed diagnosis', 'Clinical follow-up can document response and identify adverse effects early']
});

Object.assign(TREATMENT_INFO['cryo-lipolysis'], {
  lead: 'Cryolipolysis is a non-surgical body-contouring procedure that applies controlled cooling to a selected fold of subcutaneous fat. Susceptible fat cells are injured and gradually cleared, producing a modest local contour change rather than weight loss.',
  causes: 'It may be considered for a pinchable fat pocket that persists at otherwise stable weight. Localised fullness reflects fat-cell distribution influenced by genetics, hormones, age and weight history; cryolipolysis does not treat obesity, visceral fat or the metabolic causes of weight gain.',
  treatment: 'After examination and screening for cold-related disorders or hernia, an applicator cools the marked area. Temporary pain, numbness, bruising and swelling may occur. Patients must also be counselled about rare paradoxical adipose hyperplasia, in which the treated area enlarges and may require surgery.',
  benefits: ['Reduces a selected subcutaneous fat pocket without an incision', 'Produces gradual contour change over the following weeks to months', 'Usually permits return to routine activity quickly', 'Can be planned by applicator area after body-composition assessment']
});

Object.assign(TREATMENT_INFO.mnrf, {
  lead: 'Microneedling radiofrequency (MNRF) inserts insulated or non-insulated needles to defined depths and delivers RF heat within the dermis. The combined mechanical injury and controlled heating are intended to remodel collagen while limiting injury to the outer surface.',
  causes: 'It may be considered for selected depressed acne scars, enlarged pores, wrinkles or mild laxity caused by dermal collagen injury and age- or sun-related collagen loss. Scar shape and depth matter: tethered rolling scars or deep ice-pick scars often need additional procedures.',
  treatment: 'After diagnosis, disinfection, eye protection where relevant and anaesthesia, depth, energy and passes are selected for the treatment area and skin tone. The US FDA has reported serious complications with some aesthetic RF microneedling uses—including burns, scarring, fat loss and nerve damage—so device training, conservative parameters and prompt follow-up are important.',
  benefits: ['Can remodel selected depressed acne scars', 'May refine pores and uneven texture', 'Can improve mild laxity and fine lines gradually', 'Adjustable needle depth permits treatment below the epidermal surface']
});

Object.assign(TREATMENT_INFO['laser-hair-reduction'], {
  lead: 'Laser hair reduction uses a wavelength absorbed by melanin in the hair shaft and follicle to thermally impair actively growing follicles. It produces long-term reduction—not guaranteed total or permanent removal—and works best when hair has sufficient pigment.',
  causes: 'The service is chosen for unwanted facial or body hair. Genetics, androgen sensitivity, medicines and disorders such as polycystic ovary syndrome can increase growth; treating an underlying hormonal cause may reduce new stimulation but does not remove hair already present.',
  treatment: 'The clinician records skin tone, hair colour, tanning, medicines and hormonal symptoms, then selects an appropriate laser and test or treatment settings. Hair is shaved rather than waxed or plucked. Multiple spaced sessions target different growth cycles, and maintenance may be needed.',
  benefits: ['Produces long-term reduction in hair number and thickness', 'Can reduce shaving irritation and ingrown hairs', 'Treats larger areas more efficiently than individual electrolysis', 'Settings can be selected for the patient\'s skin tone and hair characteristics']
});

const TREATMENT_BLOG_LINKS = {
  prp: ['prp-vs-gfc-hair-treatment', 'PRP vs. GFC for Hair Loss: What Is the Difference?'],
  gfc: ['prp-vs-gfc-hair-treatment', 'PRP vs. GFC for Hair Loss: What Is the Difference?'],
  'alopecia-areata': ['understanding-hair-loss', 'Why Is My Hair Falling Out? Understanding the Causes'],
  'dandruff-scalp': ['dandruff-healthy-scalp-guide', 'Dandruff & Scalp Health: Causes, Control and Warning Signs'],
  'hair-loss-management': ['understanding-hair-loss', 'Why Is My Hair Falling Out? Understanding the Causes'],
  'acne-scars': ['why-medi-facial', 'Why Medi Facial? Types & Benefits'],
  'oxygeno-facial': ['which-facial-is-right-for-you', 'Which Facial Is Right for You?'],
  'medi-facial': ['why-medi-facial', 'Why Medi Facial? Types & Benefits'],
  hydrafacial: ['which-facial-is-right-for-you', 'Which Facial Is Right for You?'],
  'photo-facial': ['ipl-photofacial-guide', 'IPL Photofacial for Sun Spots, Redness & Rejuvenation'],
  'diamond-facial': ['which-facial-is-right-for-you', 'Which Facial Is Right for You?'],
  'carbon-laser-facial': ['carbon-laser-peel-guide', 'Carbon Laser Peel: What the Hollywood Facial Can Do'],
  'omega-led-facial': ['why-medi-facial', 'Why Medi Facial? Types & Benefits'],
  'pumpkin-peel-facial': ['why-medi-facial', 'Why Medi Facial? Types & Benefits'],
  'acne-laser-facial': ['why-medi-facial', 'Why Medi Facial? Types & Benefits'],
  'korean-glass-facial': ['which-facial-is-right-for-you', 'Which Facial Is Right for You?'],
  'mandelic-peel-facial': ['understanding-chemical-peels', 'Understanding Chemical Peels'],
  'rf-antiaging-facial': ['which-facial-is-right-for-you', 'Which Facial Is Right for You?'],
  'vitc-citrus-peel-facial': ['understanding-chemical-peels', 'Understanding Chemical Peels'],
  'vampire-facial': ['which-facial-is-right-for-you', 'Which Facial Is Right for You?'],
  'fire-ice-facial': ['why-medi-facial', 'Why Medi Facial? Types & Benefits'],
  'ozone-high-frequency-facial': ['why-medi-facial', 'Why Medi Facial? Types & Benefits'],
  'collagen-facial': ['which-facial-is-right-for-you', 'Which Facial Is Right for You?'],
  'dermaplaning-facial': ['which-facial-is-right-for-you', 'Which Facial Is Right for You?'],
  'laser-resurfacing-facial': ['which-facial-is-right-for-you', 'Which Facial Is Right for You?'],
  'meso-magic-facial': ['why-medi-facial', 'Why Medi Facial? Types & Benefits'],
  'micro-derma-peel-facial': ['understanding-chemical-peels', 'Understanding Chemical Peels'],
  'advanced-skin-whitening-peel': ['understanding-chemical-peels', 'Understanding Chemical Peels'],
  'laser-hair-reduction': ['laser-hair-reduction-guide', 'Laser Hair Reduction: How It Works & What to Expect'],
  'freckles-removal': ['freckles-causes-and-care', 'Freckles: Why They Appear & When Treatment Helps'],
  'q-switch-laser': ['q-switch-laser-guide', 'Q-Switched Laser: Pigmentation, Spots & Tattoo Ink'],
  'lip-lightening': ['dark-lips-causes-care', 'Dark Lips: Common Causes, Daily Care & Treatment Options'],
  'tattoo-removal': ['q-switch-laser-guide', 'Q-Switched Laser: Pigmentation, Spots & Tattoo Ink'],
  'laser-lipolysis': ['ultrasound-cavitation-guide', 'Ultrasound Cavitation for Targeted Body Contouring'],
  'weight-management': ['medical-weight-loss-assessment', 'Before a Weight-Loss Program: Tests, Measurements & Goals'],
  'ems-sculpt': ['ems-body-toning', 'EMS Body Toning: What Electrical Muscle Stimulation Does'],
  'sauna-belt': ['sleep-stress-and-weight', 'Sleep, Stress & Weight: The Often-Missed Connection'],
  'electronic-muscle-stimulation': ['ems-body-toning', 'EMS Body Toning: What Electrical Muscle Stimulation Does'],
  'body-contouring': ['body-composition-beyond-bmi', 'Body Composition: Why the Scale Is Only Part of the Story'],
  'rf-skin-tightening': ['radiofrequency-skin-tightening', 'Radiofrequency Body Tightening: Firmness After Inch Loss']
};

function getTreatmentCause(info){
  return info.causes;
}

function getTreatmentPlan(info){
  return info.treatment;
}

function getTreatmentBenefits(info){
  return info.benefits;
}

function renderTreatmentModal(slug){
  const info = TREATMENT_INFO[slug];
  if(!info) return null;
  const isComplete = info.lead && info.causes && info.treatment && Array.isArray(info.benefits) && info.benefits.length;
  if(!isComplete){
    console.error(`Incomplete treatment information for: ${slug}`);
    return null;
  }
  const benefits = getTreatmentBenefits(info);
  const mappedBlog = TREATMENT_BLOG_LINKS[slug];
  const blogSlug = info.blogSlug || mappedBlog?.[0];
  const blogTitle = info.blogTitle || mappedBlog?.[1];
  let body = `<div class="eyebrow">${info.category}</div><h3>${info.title}</h3>`;
  body += `<h4>Description</h4><p class="modal-lead">${info.lead}</p>`;
  body += `<h4>Why it happens</h4><p>${getTreatmentCause(info)}</p>`;
  body += `<h4>Treatment</h4><p>${getTreatmentPlan(info)}</p>`;
  body += `<h4>Benefits</h4><ul>${benefits.map(b=>`<li>${b}</li>`).join('')}</ul>`;
  if(blogSlug) body += `<p class="modal-blog-link"><a href="blog.html#${blogSlug}" class="learn-more">Read more: ${blogTitle} <span aria-hidden="true">→</span></a></p>`;
  return (
    `<button type="button" class="modal-close" data-modal-close aria-label="Close">×</button>` +
    `<div class="modal-content">` +
    `<div class="modal-image"><img src="${info.image}" alt="${info.title} at Dr. Tupe's Clinic" loading="lazy" /></div>` +
    `<div class="modal-body">${body}</div>` +
    `</div>`
  );
}

{
  let activeModal = null;
  const treatmentModal = document.createElement('div');
  treatmentModal.className = 'modal-overlay';
  treatmentModal.id = 'treatmentModal';
  treatmentModal.hidden = true;
  document.body.appendChild(treatmentModal);

  const openModal = modal=>{
    if(!modal) return;
    activeModal = modal;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    requestAnimationFrame(()=> modal.classList.add('is-open'));
    modal.querySelector('.modal-close')?.focus();
  };
  const closeModal = modal=>{
    if(!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    setTimeout(()=>{ modal.hidden = true; }, 250);
    activeModal = null;
  };

  document.addEventListener('click', e=>{
    const trigger = e.target.closest('[data-modal-open]');
    if(trigger){
      const html = renderTreatmentModal(trigger.dataset.modalOpen);
      if(!html) return;
      treatmentModal.innerHTML = `<div class="modal-box" role="dialog" aria-modal="true">${html}</div>`;
      openModal(treatmentModal);
      return;
    }
    if(e.target === treatmentModal || e.target.closest('[data-modal-close]')){
      closeModal(treatmentModal);
    }
  });
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape' && activeModal) closeModal(activeModal);
  });
}

/* ---------- FAQ CHATBOT WIDGET ---------- */
(function(){
  // General clinic-policy Q&A (fees, hours, appointments…) that isn't tied to one
  // treatment card. Anything treatment-specific ("do you treat acne?") is answered
  // dynamically further down, straight from the live siteSearchIndex — so it can
  // never drift out of sync with the actual service cards.
  const FAQS = [
    {
      q: "What are the consultation fees?",
      keywords: ["fee","fees","cost","price","charge","charges","how much"],
      a: "The initial consultation fee is <strong>₹500</strong>, and follow-up visits are <strong>₹300</strong>."
    },
    {
      q: "Do I need an appointment?",
      keywords: ["appointment","walk in","walkin","walk-in","book","booking","slot"],
      a: "Walk-ins are welcome during clinic hours! For specific treatments, calling ahead helps us plan your visit better."
    },
    {
      q: "What happens on my first visit?",
      keywords: ["first visit","first time","new patient","what happens"],
      a: "Your first visit is a consultation — Dr. Tupe examines your concern and recommends a treatment plan. Nothing is done without your understanding and consent."
    },
    {
      q: "How many sessions will I need?",
      keywords: ["session","sessions","sitting","sittings","how many"],
      a: "It varies by treatment and case — PRP and GFC typically need 3–5 sittings. This is discussed clearly during your consultation."
    },
    {
      q: "Do you offer diet & nutrition guidance?",
      keywords: ["diet","nutrition","food plan"],
      a: "Yes — Dr. Tupe is also a qualified nutritionist and includes diet guidance as part of skin, hair and weight-management plans."
    },
    {
      q: "What are your clinic hours?",
      keywords: ["hour","hours","timing","timings","open","close"],
      a: "Monday–Saturday: 10:00 AM–2:00 PM &amp; 6:00 PM–10:00 PM.<br>Sunday: 10:00 AM–2:00 PM."
    },
    {
      q: "Where are your clinics located?",
      keywords: ["location","address","where","directions","bhandup"],
      a: "We have two clinics in Bhandup West, Mumbai:<br><br><strong>Clinic 1</strong> (Dr. Pratima Tupe): Shop No. 19, Manbhai Keshavji Wadi, Opp. D Bazaar.<br><strong>Clinic 2</strong> (Dr. Sambhaji Tupe): 8 A, Guru Ramdas Market, opp. Usha Nagar.<br><br><a href=\"index.html#contact\">See maps &amp; directions</a>"
    },
    {
      q: "How do I contact the clinic?",
      keywords: ["phone","contact","number","email","reach"],
      a: "Clinic 1: <a href=\"tel:+919769657185\">+91 97696 57185</a><br>Clinic 2: <a href=\"tel:+919323904969\">+91 93239 04969</a>"
    }
  ];

  const SUGGESTED = ["What are the consultation fees?","Do you treat hair fall?","What are your clinic hours?","Where are your clinics located?"];
  const PRIMARY_PHONE = "+919769657185";

  function normalize(str){ return str.toLowerCase().replace(/[^\w\s]/g,' ').replace(/\s+/g,' ').trim(); }

  function matchFaq(input){
    const text = normalize(input);
    if(!text) return null;
    let best = null, bestScore = 0;
    FAQS.forEach(faq=>{
      let score = 0;
      faq.keywords.forEach(kw=>{ if(text.includes(kw)) score += kw.split(' ').length; });
      if(score > bestScore){ bestScore = score; best = faq; }
    });
    return bestScore > 0 ? best : null;
  }

  // ---- build widget DOM ----
  const fab = document.createElement('button');
  fab.className = 'chatbot-fab';
  fab.setAttribute('aria-label', 'Chat with us');
  fab.innerHTML = '<span class="fab-icon-chat" aria-hidden="true">💬</span><span class="fab-icon-close" aria-hidden="true">✕</span><span class="chatbot-fab-badge"></span>';

  const panel = document.createElement('div');
  panel.className = 'chatbot-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', "Chat with Dr. Tupe's Clinic");
  panel.innerHTML = `
    <div class="chatbot-header">
      <img src="images/logo.webp" alt="" />
      <div>
        <div class="chatbot-title">Dr. Tupe's Clinic Assistant</div>
        <div class="chatbot-sub">Usually replies instantly</div>
      </div>
    </div>
    <div class="chatbot-messages" id="chatbotMessages"></div>
    <div class="chatbot-chips" id="chatbotChips"></div>
    <div class="chatbot-input-row">
      <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Ask a question…" autocomplete="off" />
      <button type="button" class="chatbot-send" id="chatbotSend" aria-label="Send">➤</button>
    </div>
  `;

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  const messagesEl = panel.querySelector('#chatbotMessages');
  const chipsEl = panel.querySelector('#chatbotChips');
  const inputEl = panel.querySelector('#chatbotInput');
  const sendBtn = panel.querySelector('#chatbotSend');

  function addMessage(html, role){
    const msg = document.createElement('div');
    msg.className = 'chatbot-msg ' + role;
    msg.innerHTML = html;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return msg;
  }

  function renderChips(){
    chipsEl.innerHTML = '';
    SUGGESTED.forEach(q=>{
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chatbot-chip';
      chip.textContent = q;
      chip.addEventListener('click', ()=> handleUserInput(q));
      chipsEl.appendChild(chip);
    });
  }

  function showTyping(){
    const typing = document.createElement('div');
    typing.className = 'chatbot-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(typing);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return typing;
  }

  function handleUserInput(text){
    if(!text.trim()) return;
    addMessage(text.replace(/</g,'&lt;'), 'user');
    inputEl.value = '';
    const typing = showTyping();
    setTimeout(()=>{
      typing.remove();
      const faqMatch = matchFaq(text);
      if(faqMatch){
        addMessage(faqMatch.a, 'bot');
        return;
      }
      const [siteMatch] = searchSiteIndex(text, 1);
      if(siteMatch && siteMatch.tab){
        // it's a treatment card — confirm we offer it and offer a direct jump to it
        const titleAttr = siteMatch.title.replace(/"/g, '&quot;');
        addMessage(
          `Yes — we offer <strong>${siteMatch.title}</strong>. ${siteMatch.desc || ''}` +
          `<div class="chatbot-fallback-ctas">` +
          `<button type="button" class="call" data-view-title="${titleAttr}" data-view-tab="${siteMatch.tab}"${siteMatch.subcat ? ` data-view-subcat="${siteMatch.subcat}"` : ''}>View treatment →</button>` +
          `</div>`,
          'bot'
        );
        return;
      }
      if(siteMatch){
        // a non-treatment match (contact, hours, gallery…)
        addMessage(`${siteMatch.desc} <a href="${siteMatch.href}">${siteMatch.title} →</a>`, 'bot');
        return;
      }
      addMessage(
        `I'm not totally sure about that one — but our team can help directly!` +
        `<div class="chatbot-fallback-ctas">` +
        `<a class="call" href="tel:${PRIMARY_PHONE}">📞 Call Us</a>` +
        `<a class="wa" href="https://wa.me/${PRIMARY_PHONE.replace('+','')}" target="_blank" rel="noopener">WhatsApp</a>` +
        `</div>`,
        'fallback'
      );
    }, prefersReducedMotion ? 0 : 550);
  }

  messagesEl.addEventListener('click', e=>{
    const btn = e.target.closest('[data-view-title]');
    if(!btn) return;
    closePanel();
    goToTreatmentCard({ tab: btn.dataset.viewTab, subcat: btn.dataset.viewSubcat, title: btn.dataset.viewTitle });
  });

  let greeted = false;
  function openPanel(){
    panel.classList.add('is-open');
    fab.classList.add('is-open');
    if(!greeted){
      greeted = true;
      addMessage("Hi! 👋 I'm Dr. Tupe's Clinic Assistant. Ask me about fees, hours, locations or treatments — or tap a question below.", 'bot');
      renderChips();
    }
    inputEl.focus();
  }
  function closePanel(){
    panel.classList.remove('is-open');
    fab.classList.remove('is-open');
  }

  fab.addEventListener('click', ()=>{
    panel.classList.contains('is-open') ? closePanel() : openPanel();
  });
  sendBtn.addEventListener('click', ()=> handleUserInput(inputEl.value));
  inputEl.addEventListener('keydown', e=>{
    if(e.key === 'Enter') handleUserInput(inputEl.value);
  });
})();

/* ---------- GLOBAL SEARCH (treatments across every category + clinic info) ---------- */
(function(){
  const navActions = document.querySelector('.nav-actions');
  if(!navActions) return;

  // ---- nav trigger ----
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'nav-search-btn';
  trigger.setAttribute('aria-label', 'Search treatments and clinic info');
  trigger.innerHTML = '🔍';
  navActions.insertBefore(trigger, navActions.firstChild);

  // ---- overlay ----
  const overlay = document.createElement('div');
  overlay.className = 'search-overlay';
  overlay.hidden = true;
  overlay.innerHTML =
    '<div class="search-box" role="dialog" aria-modal="true" aria-label="Search">' +
      '<div class="search-box-input-row">' +
        '<span class="search-icon" aria-hidden="true">🔍</span>' +
        '<input type="text" id="globalSearchInput" placeholder="Search treatments, hours, location…" autocomplete="off" />' +
        '<button type="button" class="search-box-close" id="globalSearchClose" aria-label="Close">✕</button>' +
      '</div>' +
      '<div class="search-results" id="globalSearchResults"></div>' +
    '</div>';
  document.body.appendChild(overlay);

  const inputEl = overlay.querySelector('#globalSearchInput');
  const resultsEl = overlay.querySelector('#globalSearchResults');
  const closeBtn = overlay.querySelector('#globalSearchClose');

  function renderResults(items, query){
    if(!query.trim()){
      resultsEl.innerHTML = '<div class="search-hint">Try "PRP", "acne", "laser hair", "hours" or "contact". <span><kbd>Esc</kbd> to close</span></div>';
      return;
    }
    if(items.length === 0){
      resultsEl.innerHTML = `<div class="search-empty-state">No matches for "${query}" — <a href="index.html#contact">contact us</a> and we'll help you find the right treatment.</div>`;
      return;
    }
    resultsEl.innerHTML = items.map((item, i)=>
      `<a class="search-result${i === 0 ? ' is-active' : ''}" href="${item.href}"` +
      (item.tab ? ` data-result-tab="${item.tab}"` : '') +
      (item.subcat ? ` data-result-subcat="${item.subcat}"` : '') +
      ` data-result-title="${item.title.replace(/"/g, '&quot;')}"` +
      (item.external ? ' target="_blank" rel="noopener"' : '') +
      `>` +
      `<span class="search-result-icon">${item.icon}</span>` +
      `<span class="search-result-body">` +
      `<span class="search-result-title">${item.title}</span>` +
      `<span class="search-result-desc">${item.desc || ''}</span>` +
      `<span class="search-result-tag">${item.tag}</span>` +
      `</span></a>`
    ).join('');
  }

  function runSearch(){ renderResults(searchSiteIndex(inputEl.value, 8), inputEl.value); }

  function openSearch(){
    overlay.hidden = false;
    requestAnimationFrame(()=> overlay.classList.add('is-open'));
    document.body.classList.add('modal-open');
    inputEl.value = '';
    renderResults([], '');
    setTimeout(()=> inputEl.focus(), 50);
  }
  function closeSearch(){
    overlay.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    setTimeout(()=>{ overlay.hidden = true; }, 200);
  }

  trigger.addEventListener('click', openSearch);
  closeBtn.addEventListener('click', closeSearch);
  overlay.addEventListener('click', e=>{ if(e.target === overlay) closeSearch(); });
  inputEl.addEventListener('input', runSearch);
  resultsEl.addEventListener('click', e=>{
    const el = e.target.closest('.search-result');
    if(!el) return;
    const tab = el.dataset.resultTab;
    if(!tab){ closeSearch(); return; } // info entries (contact, FAQ, gallery…) navigate normally
    e.preventDefault();
    closeSearch();
    goToTreatmentCard({ tab, subcat: el.dataset.resultSubcat, title: el.dataset.resultTitle, href: el.getAttribute('href') });
  });

  document.addEventListener('keydown', e=>{
    const isOpen = !overlay.hidden;
    const typingElsewhere = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
    if(e.key === '/' && !isOpen && !typingElsewhere){
      e.preventDefault();
      openSearch();
    } else if(e.key === 'Escape' && isOpen){
      closeSearch();
    } else if(e.key === 'Enter' && isOpen){
      resultsEl.querySelector('.search-result')?.click();
    }
  });
})();
