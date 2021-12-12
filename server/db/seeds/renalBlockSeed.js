const renalBlockList = [

    // Block 1
  {
    categoryId: 2,
    props: '26yo M comes in with sharp flank pain. You perform a POCUS:',
    usviews: ['/renal/block1/1.gif', '/rena;/block1/2.gif', '/renal/block1/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'How do these ultrasound findings affect the probability that this patient has nephrolithiasis?',
        options: 'A: Increases the chance", "B: Decreases the chance", "C: Rules it out", "D: Rules it out',
        answer: 2,
        explain: 'B: POCUS is highly sensitive for hydronephrosis with a range of 82 to 99% having been reported in the literature. Having no hydronephrosis makes a ureteral calculus larger then 5 mm unlikely; however in 11-15% of people, there will be no hydronephrosis. This can sometimes happen because the stone is small and non-obstructive. Additionally, patients who are dehydrated will not show hydronephrosis. Oral or IV hydration before obtaining renal ultrasound can increase the sensitivity of finding hydronephrosis in the context of nephrolithiasis.'
      },
      {
        qtype: 'general',
        question: 'The patient states he has not had any PO intake of fluid for the past two days. How can this impact the sensitiity of your renal POCUS?',
        options: 'A: Decreases the sensitivity, B: increases the sensitivity, C: Does not change the sensitivity, D: None of the above',
        answer: 1,
        explain: 'A. Decreases the sensitivity. Oral or IV hydration before obtaining US can help increase the sensitivity of finding hydronephrosis in the context of nephrolithiasis. If nephrolithiasis is suspected and no hydronephrosis is appreciated on renal POCUS, the US should be repeated after hydration. If still no hydronephrosis is appreciated, it is appropriate to consider alternate diagnoses. In the emergency room it may not be prudent to hydrate the patient and repeat the examination due to time constraints. In this scenario, one can consider immediately obtaining a CT scan to assess for alternative diagnoses or confirm nephrolithiasis, as opposed to attempting PO or IVF hydration.'
      },
    ],
    interpretation: [
      'Answer',
      'Interpretation',
      'Impression'
    ]
  },

    // Block 2
  {
    categoryId: 2,
    props: 'Please correctly identify the labeled letters in the right flank view:',
    usviews: ['/renal/block2/1.jpg'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Which of the following structures represents the letter A?',
        options: 'Medulla, Gerotas fascia, Cortex, Liver, Renal pelvis, "Ureter',
        answer: 5,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Which of the following structures represents the letter B?',
        options: 'Medulla, Gerotas fascia, Cortex, Liver, Renal pelvis, "Ureter',
        answer: 1,
        explain: ''
      },     
      {
        qtype: 'reading',
        question: 'Which of the following structures represents the letter C?',
        options: 'Medulla, Gerotas fascia, Cortex, Liver, Renal pelvis, "Ureter',
        answer: 3,
        explain: ''
      },    
      {
        qtype: 'reading',
        question: 'Which of the following structures represents the letter D?',
        options: 'Medulla, Gerotas fascia, Cortex, Liver, Renal pelvis, "Ureter',
        answer: 2,
        explain: ''
      },    
      {
        qtype: 'reading',
        question: 'Which of the following structures represents the letter E?',
        options: 'Medulla, Gerotas fascia, Cortex, Liver, Renal pelvis, "Ureter',
        answer: 6,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '6. What is the position of the left versus the right kidney?',
        options: 'A: The right kidney is caudal to the left kidney", "B: The L kidney is larger then the right kidney", "C: Both kidneys are at the same approximate level in the frontal plane',
        answer: 1,
        explain: 'A: The left kidney is more cranial than the right kidney anatomically. They will not be on the same level in the frontal plane. In addition, the left kidney has a smaller sonographic window making it harder to visualize. Normally the ureter is not visualized.'
      },
      {
        qtype: 'general',
        question: '7. Why is it easier to image the right kidney versus the left kidney?',
        options: 'A: The right kidney has a better acoustic window as it is next to the liver", "B: Interference of air from the stomach and intestine while imaging the left kidney", "C: Superior position of the left kidney more often putting it posterior to a rib", "D: All of the above',
        answer: 4,
        explain: 'D: The right kidney has a more superior acoustic window due to its position adjacent to the liver. Additionally, the left kidney is in close proximity to many structures that can contain air, which can obscure findings. Lastly, the left kidney lies more superiorly and posteriorly, making it more difficult to obtain a good window view of the left kidney.'
      },
    ]
  },
    // Block 3
  {
    categoryId: 2,
    props: '35yo F with a history of nephrolithiasis comes in with a chief complaint of L flank pain. You perform a POCUS:',
    usviews: ['/renal/block3/1.gif', '/rena;/block3/2.png', '/renal/block3/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'The patient’s pain is well controlled, and there are no signs of infection on the urinalysis. What should you do next in the management of this patient?',
        options: 'A: Give Toradol 15 IV, B: Obtain a CT scan, C: Place a foley catheter, D: Discharge the patient',
        answer: 4,
        explain: 'D. With hydronephrosis and flank pain in a young patient, if the pain is adequately controlled they can be discharged with urology or PMD follow up. Management would change if the patient had persistent symptoms, a solitary kidney, or infectious urine.'
      },
      {
        qtype: 'general',
        question: 'How would your management change if the patient told you she has a congenital defect of the right kidney and it is nonfunctional?',
        options: 'A: Would not change management, B: Would admit the patient for further management, C: Would consult urology for emergent utereral stent placement',
        answer: 2,
        explain: 'B. Patients with a solitary kidney, transplanted kidney or renal failure should have a low threshold for admission, as continued obstruction of the one functional kidney will result in kidney failure. This is contrasted with a patient with two functional kidneys, in which the non-obstructed kidney would compensate for the obstructed kidney.'
      },
    ]
  },
    // Block 4
  {
    categoryId: 2,
    props: ' 26yo pregnant female comes in with R flank pain. You perform a POCUS: ',
    usviews: ['/renal/block4/1.png', '/rena;/block4/2.jpg', '/renal/block4/3.jpg'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'What should you do next in the management of this patient?',
        options: 'A: Discharge the patient, B: Obtain bloodwork, a UA and a RUQ ultrasound, C: Consult Urology, D: Admit the patient for antibiotics',
        answer: 2,
        explain: 'B: Hydronephrosis in the R kidney can be physiologic in the context of pregnancy, due to compression by the uterus. Therefore, in this case it is unclear if this is from nephrolithiasis. This patient will need further workup in ED for other etiologies of flank pain including gallstones, pyelonephritis, and pancreatitis. It is also unclear if this is pyelonephritis at this point in time. Urinalysis should be obtained to further assess for this. As such, antibiotics should not be given yet. There is also no indication for a urology consult at this time. '
      },
      {
        qtype: 'general',
        question: 'What is the volume of urine in the bladder?',
        options: 'A: 10cc", "B: 130cc", "C: 1000cc", "D: 520cc',
        answer: 2,
        explain: 'B: The equation is L x W x H x .75. Here we find 7 x 5 x 5 x .75 = 131ml. Normal post-void residual volumes should not be greater then 100cc. If given the chance to urinate this patient will likely expel enough urine to where less then 100cc of urine is left in the bladder.'
      },
    ]
  },

      // Block 5
  {
    categoryId: 2,
    props: ' 42yo M comes in with severe flank pain. You perform a POCUS:',
    usviews: ['/renal/block5/1.png', '/rena;/block5/2.png', '/renal/block5/3.jpg'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'What should you do next in the management of this patient?',
        options: 'A: Give Toradol IV and if adequate pain control is achieved discharge the patient, B: Obtain a CT scan, C: Place a foley catheter, D: Discharge the patient at this time',
        answer: 2,
        explain: 'B: Large hydronephrosis indicates that there is possibly a large stone whose size must be delineated. Stones greater than 5mm have a smaller chance of passing and will require follow up outpatient with urology for further management. In some cases they may require a ureteral stent. A CT scan should be performed in the ED to assess the size of the stone. Stones greater than 5 mm have a passage rate of 60%, while stones >8mm have a passage rate of less than 40%.'
      },
      {
        qtype: 'general',
        question: 'What change would you expect to see if the obstruction causing hydronephrosis was chronic?',
        options: 'A:Thickening of the calyx, B: Thinning of the cortex, C: Hypertrophy of the renal vessels, D: Destruction of the renal sinus',
        answer: 2,
        explain: 'B: Cortical atrophy will occur along with destruction of many of the structures of the kidney, resulting in a large anechoic kidney with a thin cortex.'
      },
    ]
  },

      // Block 6
  {
    categoryId: 2,
    props: '73yo M comes in with back pain. You perform a POCUS:',
    usviews: ['/renal/block6/1.gif', '/rena;/block6/2.png', '/renal/block6/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'What is the appropriate next step in the management of this patient?',
        options: 'A: Give IV fluids and admit the patient, B: Assess if the patient has started any new medications, C: Place a foley catheter and obtain bloodwork including a metabolic panel, D: Place a foley catheter and discharge the patient',
        answer: 3,
        explain: 'C: This patient has bilateral severe hydronephrosis, suggesting that renal function is likely compromised. Creatinine should be assessed for post-renal acute kidney injury. Additionally, post-obstructive diuresis should also be assessed with observation of the patient after Foley placement. >250ml/hr for >2 hours raises concern for electrolyte abnormalities due to excessive diuresis and should be admitted for further observation and trending of electrolytes.'
      },
      {
        qtype: 'general',
        question: 'If the patient states he has also been unable to walk for the past few days, what should be the next step in your management?',
        options: 'A: Obtain a CT of the head , B: Obtain a urinalysis, C: Call a code stroke, D: Obtain an MRI of the spine',
        answer: 4,
        explain: 'D: Urinary retention and new onset lower extremity weakness are red flags for spinal compression pathologies, and an emergent MRI should be obtained. Any complaint of back pain lower extremity weakness should be followed by bladder ultrasound, because it is the most sensitive finding for acute cord compression (sensitivity > 90%). As this patient is also having urinary retention, an emergent MRI should be performed to assess the spinal cord.'
      },
    ]
  },

      // Block 7
  {
    categoryId: 2,
    props: '35yo M comes in with flank pain. You perform a POCUS:',
    usviews: ['/renal/block7/1.gif', '/rena;/block7/2.gif', '/renal/block7/3.png'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'What is the signifiance of the finding on the bladder scan?',
        options: 'A: ureteral stenosis, B: Uterovesicular junction stone, C: Malignancy, D: Artifact',
        answer: 2,
        explain: 'B: Twinkle artifact represents a ureteral calculus. It is believed to be an artifact due to a highly reflective object (in this case, the calculus) causing the machine to think that there is turbulent blood flow behind it.'
      },
      {
        qtype: 'general',
        question: 'You obtain a CT scan and the stone measures 1mm in diameter. The patient continues to be in pain despite administration of multiple medications for pain. What is the appropriate next step in the management of this patient?',
        options: 'A: Discharge the patient, B: Consult urology, C: Admit the patient',
        answer: 3,
        explain: 'C: In order to be considered for discharge, a patient should have their pain under control. It is not entirely unreasonable to obtain a urology consult, however because a CT scan was already performed and the stone was foud to be 1mm in diameter, which at that size will likely pass on its own, there is little utility for consultation in the emergency room. The patient should be admitted for pain control, and urology can evaluate while the patient is on the inpatient floor.'
      },
    ]
  },

      // Block 8
  {
    categoryId: 2,
    props: '15yo F comes in with some cramping on the right side of the abdomen. You perform a POCUS:',
    usviews: ['/renal/block8/1.png', '/rena;/block8/2.gif', '/renal/block8/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'What should you do next in the management of this patient?',
        options: 'A: Give Toradol 15 mg IV, B: Obtain a CT scan, C: Place a foley catheter, D: Discharge the patient',
        answer: 1,
        explain: 'A: Hydronephrosis and symptoms consistent with renal colic is sufficient to diagnose renal colic in this young and otherwise healthy female. The patient should be treated symptomatically with toradol. If her pain significantly improves, she can be discharged with close follow up with her PMD or urology. Persistence of symptoms can signal obstruction, and thus CT scan should be considered to assess the size of the stone.'
      },
      {
        qtype: 'general',
        question: 'If this patients urine pregnancy came back positive, how would this change the clinical significance of your POCUS findings?',
        options: 'A: Interpretation of POCUS findings do not change, B: Findings are now less indicative of nephrolithiasis, C: Would raise concern for infectious etiology of POCUS findings',
        answer: 2,
        explain: 'B. It is important to remember that mild hydronephrosis is not always pathologic, and can be physiological. For example, right sided hydronephrosis is physiologic in pregnancy (although this is generally more the case in the second trimester and beyond) . Thus, in pregnant patients, the find of hydronephrosis in the R flank does not increase the posttest probability of nephrolithiasis as significantly compared to nonpregnant patients. An alternate etiology for flank pain should be assessed, in addition to doing more workup to assess if this is indeed nephrolthiasis.'
      },
    ]
  },

      // Block 9
  {
    categoryId: 2,
    props: '75yo M comes in with abd pain. You have the patient urinate and then you perform a POCUS: ',
    usviews: ['/renal/block9/1.gif', '/rena;/block9/2.gif', '/renal/block9/3.jpg', '/renal/block9/4.jpg'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'What should you do next in the management of this patient?',
        options: 'A: Obtain a CT scan, B: Place a foley catheter, C: Admit the patient, D: Obtain a urology consult',
        answer: 2,
        explain: 'B: The most common cause of urinary retention in elderly men is BPH. Bladder distension can cause significant pain and can eventually result in post-renal AKI. , Normal PVR is <100 in patients >65 years of age. If the catheter is successfully placed and drains urine adequately, the patient can be discharged with catheter in place for follow up with urology. In any male patient with new onset AKI, POCUS should be considered, as post-renal obstruction is a readily reversible cause of AKI.'
      },
      {
        qtype: 'general',
        question: '4.What is the approximate volume of the bladder here?',
        options: 'A: 100 cc", "B: 520 cc", "C: 750 cc", "D: 1500 cc',
        answer: 3,
        explain: 'C: To calculate the volume, you can multiply the L x W x H x .75 (corrective factor, sometimes a different corrective factor is used) . An easy way to remember this is on the Transverse view you measure a plus sign and a minus sign (the length) on the sagittal view. Here we have x 10 x 10 x 10 x .75 = 750 cc.'
      },
    ]
  },

     // Block 10
  {
    categoryId: 2,
    props: '75yo M comes in with flank pain. You perform a urinalysis and find no abnormalities. You perform POCUS: ',
    usviews: ['/renal/block10/1.gif', '/rena;/block10/2.gif', '/renal/block10/3.jpg'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'What is the appropriate next step in the management of this patient? ',
        options: 'A: Obtain a CT scan, B: Place a foley catheter, C: Admit the patient, D: Obtain a urology consult',
        answer: 4,
        explain: 'D: A negative POCUS and no hematuria has a high negative predictive value for nephrolithiasis. In an elderly male with flank pain, it is important to consider triple AAA. AAA is a time sensitive diagnosis and should be immediately assessed with ultrasound of the aorta after finishing the bedside ultrasound of the kidneys. CT angiogram of the aorta can be considered next.'
      },
      {
        qtype: 'general',
        question: 'If this patients urine was indicative of infection, what difference would you expect in his ultrasound findings?',
        options: 'A: Hyperechoic, B: Hypoechoic, C: Normal,D: Distended renal pelvis',
        answer: 3,
        explain: 'C: The sonographic appearance of the kidney is normal. Complex infections such as emphysematous pyelonephritis or renal abscess may show findings, but these types of infections are rare.'
      },
    ]
  },

      // Block 11
  {
    categoryId: 2,
    props: '31yo M comes in with a chief complaint of flank pain. You perform a POCUS:',
    usviews: ['/renal/block11/1.gif', '/rena;/block11/2.gif', '/renal/block11/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'What artifact is apprieciated on this POCUS?',
        options: 'A: Reverberation artifact, B: Side lobe artifact, C: Mirroring artifact, D: Shadowing artifact',
        answer: 4,
        explain: 'D. Shadowing artifacts occur when a highly reflective surface, such as the UPJ stone, bounces all of the sound waves back, resulting in no sound waves making it past the stone. The object will be hyperechoic while posterior to it will be anechoic, which is the "shadow" of the object. The structures posterior to the highly reflective object will not be imaged. Reverberation occurs when sound waves bounce off of two highly reflective objects with only some of the signal coming through each time. This causes reverberation of "artifacts" posterior to the reflective surface. Mirroring artifacts occur when objects appear across both sides of a strong artifact. Side lobe artifacts occur when beams outside the central beam are reflected at an angle back to the central beam of the transducer.'
      },
      {
        qtype: 'general',
        question: 'What symptoms would you expect if you found nephrolithiasis within the kidney?',
        options: 'A: Flank pain, B: Urinary frequency, C: Abdominal pain, D: No symptoms',
        answer: 4,
        explain: 'D. Calculi within the kidney produce no symptoms. Once the stone is located in the ureter however, it can cause distension, resulting in pain and other symptoms.'
      },
    ]
  },

      // Block 12
  {
    categoryId: 2,
    props: '55yo M comes in with a chief complaint of lower back pain. You perform a POCUS:',
    usviews: ['/renal/block11/1.gif', '/rena;/block11/2.gif', '/renal/block11/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'What are the criteria that a cyst must have to be considered benign?',
        options: 'A: Posterior enhancement beyond the cyst, B: Well-defined interface between the cyst and adjacent renal parenchyma, C: Smooth borders, D: No internal echoes or solid elements, E: All of the above',
        answer: 5,
        explain: 'E: All of the listed answers are indicative of a benign cyst. If any of these are not true, further workup/follow up should be considered.'
      },
    ]
  },

      // Block 13
  {
    categoryId: 2,
    props: '34yo F comes in with a chief complaint of flank pain. You perform a POCUS:',
    usviews: ['/renal/block13/1.gif', '/rena;/block13/2.gif', '/renal/block13/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'You measure the stone and find it to be 7mm large. What is the chance that this stone will pass on its own?',
        options: 'A: 87%,B: 76%,C: 47%,E: 25%',
        answer: 3,
        explain: 'C: For a 7mm stone, the passage rate is about 47%. The passage rate decreases with the size of the stone, with the rate increasing to 60% at 5mm. The rate is likely higher in this patient, as the stone has already passed to the UVJ junction. However, there should be a low threshold for consulting urology once the size of the stone is >5mm, due to the lower rates of successful spontaneous expulsion.'
      },
      {
        qtype: 'general',
        question: ' The patients symptoms improve with toradol IV. Of the following options, what is the most appropriate next step in the management of the patient?',
        options: 'A: Discharge the patient, B: Admit, C: Consult urology, D: Obtain a UA',
        answer: 4,
        explain: 'D: It is important to ensure there is no infection by obtaining a UA prior to discharge. Obstructed urine that is infected can quickly cause septic shock.'
      },
    ]
  },

      // Block 14
  {
    categoryId: 2,
    props: '38yo M comes in with flank pain. You perform a POCUS:',
    usviews: ['/renal/block14/1.gif', '/rena;/block14/2.gif', '/renal/block14/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'Of the following options, what is the most appropriate next step in the management of patient?',
        options: 'A: Discharge with urology follow up, B: Obtain CT, C: Obtain bloodwork including lipase, D: Admit for pain control',
        answer: 2,
        explain: 'B: Severe hydronephrosis indicates a potential large stone, for which intervention would be required. CT scan should be obtained to further characterize the size of the stone.'
      },
    ]
  },

        // Block 15
  {
    categoryId: 2,
    props: '25yo M comes in with a chief complaint of flank pain. Before any other interventions occur, you perform a POCUS:',
    usviews: ['/renal/block15/1.gif', '/rena;/block15/2.gif', '/renal/block15/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'Which of the following interventions would help you better evaluate for hydronephrosis?',
        options: 'A: Using the linear probe, B: Having the patient lie in the prone position, C: Giving the patient a cup of water before performing a POCUS',
        answer: 3,
        explain: 'C: Patients who are volume depleted may fail to show signs of hydronephrosis on ultrasound despite having obstruction, due to lack of urine production. IV or PO hydration prior to POCUS can help exclude obstructive hydronephrosis. Proning the patient will not improve imaging of the kidneys. Using the linear probe will make it more difficult to image the kidneys as the higher frequency of the linear probe will not have enough penetration to show the kidneys in good resolution.'
      },
      {
        qtype: 'general',
        question: 'The patients symptoms improve with toradol IV. You perform a UA and find hematuria in the urine. Of the following options, what is the most appropriate next step in the management of patient?',
        options: 'A: Discharge the patient, B: admit, C: Consult urology, D: Obtain a CT scan',
        answer: 4,
        explain: 'D. Despite the presence of no hydronephrosis, with hematuria and flank pain it is still possible this patient has nephrolithiasis. The differential for flank pain is wide, including pyelonephritis, AAA, pancreatitis, appendicitis, and PID. Of the given options, a CT scan would be the best next step.'
      },

    ]
  },

        // Block 16
  {
    categoryId: 2,
    props: 'You repeat the POCUS on the patient in block 8, this time with color doppler over the right kidney:',
    usviews: ['/renal/block16/1.gif', '/rena;/block16/2.gif', '/renal/block16/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'How does repeating this POCUS with color doppler change your initial interpreation of this POCUS?',
        options: 'A: The anechoic area represents bleeding into the kidney, B: The anichoic area represents normal kidney vasculature, C: The anechoic area represents a hemangioma of the kidney, D: Does not change your POCUS interpretation',
        answer: 2,
        explain: 'B: Intrarenal vasculature can mimic hydronephrosis. Applying color doppler and finding flow indicates that the anechoic area here is vascularized, ruling out hydronephrosis. Lack of flow is suggestive of hydronephrosis.'
      },
      {
        qtype: 'general',
        question: 'What do the colors represent?',
        options: 'A: Blue represents venous flow and red represents arterial flow, B: The color at the top of the bar represents flow toward the transducer while the color at the bottom of the bar represents flow away from the transducer, C: The color represents the viscosity of the blood',
        answer: 2,
        explain: 'B: The colors represent the direction relative to the probe. Which color represents which direction can be changed. However, traditionally blue represents away and red toward the probe.'
      },

    ]
  },

       // Block 17
  {
    categoryId: 2,
    props: '28yo M with a history of nephrolithiasis comes in with flank pain. You perform POCUS:',
    usviews: ['/renal/block17/1.png', '/rena;/block17/2.gif', '/renal/block17/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'You give Toradol IV and the patients symptoms improve. Of the following options, what is the most appropriate next step in the management of the patient? ',
        options: 'A: The anechoic area represents bleeding into the kidney, B: The anichoic area represents normal kidney vasculature, C: The anechoic area represents a hemangioma of the kidney, D: Does not change your POCUS interpretation',
        answer: 1,
        explain: 'A: In a young patient with mild hydronephrosis and a clinical picture consistent with nephrolithiasis, if their symptoms are well controlled, they can be discharged with close follow up.'
      },

    ]
  },

        // Block 18
  {
    categoryId: 2,
    props: '17yo M comes in with flank pain. You perform a POCUS:',
    usviews: ['/renal/block18/1.gif', '/rena;/block18/2.png', '/renal/block18/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'Urinalysis is performed which is negative. Of the following options, what is the most appropriate next step in the management of patient?',
        options: 'A: Discharge with urology follow up, B: Obtain CT, C: Obtain bloodwork, D: Admit for pain control',
        answer: 3,
        explain: 'C: With no blood in the urine and no known history of nephrolithiasis, although renal colic is still a possibility, alternative diagnoses for the patient’s symptoms should also be assessed. Obtaining bloodwork to assess for pancreatitis or an elevated white count would be appropriate. Imaging such as CT scan could be considered to rule out appendicitis and/or to confirm the diagnosis of nephrolithiasis.'
      },

    ]
  },

       // Block 19
  {
    categoryId: 2,
    props: '72yo M comes in with R flank pain radiating to his abdomen. You perform a POCUS:',
    usviews: ['/renal/block19/1.gif', '/rena;/block19/2.png', '/renal/block19/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'Of the following options, what is the most appropriate next step in the management of patient? ',
        options: 'A: Discharge with urology follow up, B: Obtain a CT, C: Admit for pain control',
        answer: 2,
        explain: 'B: This patient has no hydronephrosis making a kidney stone less likely. Alternative etiologies of his pain should be assessed, and of the options given a CT scan would best.'
      },

    ]
  },

      // Block 20
  {
    categoryId: 2,
    props: '36yo M comes in with flank pain. You perform a POCUS:',
    usviews: ['/renal/block20/1.gif', '/rena;/block20/2.png', '/renal/block20/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'You treat the patient with pain medication and his symptoms improve. Of the following options, what is the most appropriate next step in the management of patient? ',
        options: 'A: Discharge with urology follow up", "B: Obtain a CT", "C: Admit for pain control',
        answer: 1,
        explain: 'A: This young and otherwise healthy patient has moderate hydronephrosis with symptomatic improvement with treatment. As long as the patient can follow up, this condition can be managed in the outpatient setting.'
      },

    ]
  },

      // Block 21
  {
    categoryId: 2,
    props: '36yo M comes in with flank pain. You perform a POCUS:',
    usviews: ['/renal/block21/1.gif', '/rena;/block21/2.png', '/renal/block21/3.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the right kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What degree, if any, of hydronephrosis is there in the left kidney?',
        options: 'None, Small, Moderate, Large',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'You treat the patient with pain medication and his symptoms improve. Of the following options, what is the most appropriate next step in the management of patient? ',
        options: 'A: Discharge with urology follow up", "B: Obtain a CT", "C: Admit for pain control',
        answer: 1,
        explain: 'A: This young and otherwise healthy patient has moderate hydronephrosis with symptomatic improvement with treatment. As long as the patient can follow up, this condition can be managed in the outpatient setting.'
      },

    ]
  },


]

module.exports = renalBlockList