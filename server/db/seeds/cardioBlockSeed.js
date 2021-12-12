const cardioBlockList = [
  // Block 1
  {
    categoryId: 1,
    props: '47yo female came in with shortness of breath, pleuritic pain and tachycardia. She takes over the counter contraceptives. Please perform a point-of-care ECHO and obtain any needed views. You perform a POCUS:',
    usviews: ['/cardiothoracic/block1/1.gif', '/cardiothoracic/block1/2.gif', '/cardiothoracic/block1/3.gif', '/cardiothoracic/block1/4.gif', '/cardiothoracic/block1/5.gif', '/cardiothoracic/block1/6.gif', '/cardiothoracic/block1/7.gif', '/cardiothoracic/block1/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: 'How does what you found on ECHO affect the likehood this patient has a PE?',
        options: 'Increases it, Decreases it, Does not significantly impact the probability, Rules out PE',
        answer: 3,
        explain: 'Echocardiography does not have the sensitivity to rule out PE in stable patients without severe symptoms or hemodynamic compromise. Multiple studies have shown that emergency ultrasound has high specificity when RV dilitation and dysfunction were found, but poor sensitivity when there are no abnormal findings. For patients with hemodynamic instability, however, the sensitivity and specificity of POCUS for the diagnosis of PE is much better. One study found nearly 100% sensitivity for centrally located pulmonary embolism, which results in much more significant hemodynamic compromise.'
      },
      {
        qtype: 'general',
        question: 'How does what you found on ECHO affect the likehood this patient has an occlusive lesion of the coronaries?',
        options: 'Increases it, Decreases it, Does not significantly impact the probability, Rules out ACS as the etiology of this patients symptoms',
        answer: 2,
        explain: 'TTE is sensitive and specific for detecting regional wall motion abnormalities and overall ventricular function. Acute Ischemia causes stunning and eventual necrosis of the cardiac myocytes. If one specific cornary artery is occluded, then all of the myocytes it provides blood flow to undergo stunning, resulting in that region of the heart contracting less. However, resting echocardiography is not sufficiently sensitive alone to exclude cardiac ischemia, and it can be difficult to differentiate between old and new wall motion abnormalities.'
      },
    ],
    interpretation: [
      'No evidence of pathology is appreciable on this POCUS. This is a normal ultrasound exam.',
      'Focused transthoracic cardiac ultrasound and pulmonary ultrasound examinations were performed. No pericardial effusion was present. No pulmonary edema was appreciated. A-lines are present in all visualized lung fields. No signs of pneumothorax. No global wall motion abnormality was identified.',
      'Normal Cardiac ECHO. Normal Pulmonary exam.'
    ]
  },

  // Block 2
  {
    categoryId: 1,
    props: 'Match each letter with the correct anatomical structures',
    usviews: ['/cardiothoracic/block2/1.gif', '/cardiothoracic/block2/2.gif', '/cardiothoracic/block2/3.gif', '/cardiothoracic/block2/4.gif', '/cardiothoracic/block2/5.gif', '/cardiothoracic/block2/6.gif', '/cardiothoracic/block2/7.gif','/cardiothoracic/block2/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: '1. What structure does A represent?',
        options: 'IVC, RV, RA, Liver, Aorta',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '2. What structure does B represent?',
        options: 'IVC, RV, RA, Liver, Aorta',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '3. What structure does C represent?',
        options: 'IVC, RV, RA, Liver, Aorta',
        answer: 4,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '4. What structure does D represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending aorta, Ascending aorta',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '5. What structure does E represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending aorta, Ascending aorta',
        answer: 4,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '6. What structure does F represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending aorta, Ascending aorta',
        answer: 6,
        explain: ''
      },     
      {
        qtype: 'reading',
        question: '7. What structure does G represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending aorta, Ascending aorta',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '8. What structure does H represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending aorta, Ascending aorta',
        answer: 5,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '9. What structure does I represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending aorta, Ascending aorta',
        answer: 4,
        explain: ''
      }, 
      {
        qtype: 'reading',
        question: '10. What structure does J represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending aorta, Ascending aorta',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '11. What structure does K represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending aorta, Ascending aorta',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '12. What structure does L represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending aorta, Ascending aorta',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'general',
        question: '13. What is the normal LV: RV ratio?',
        options: 'A: 1:1, B: 1:0.6, C: 0.6:1, D: 2:1',
        answer: 2,
        explain: 'B: It is important to know the normal size relationship as when the ratio is off this can indicate pathology. If the left ventricle and right ventricle ratio is 1:1, this indicates a right ventricle which could indicate right heart strain.'
      },
      {
        qtype: 'general',
        question: '14. How can one tell if it is the aorta or IVC visualized in the subxiphoid view?',
        options: 'A: The hepatic vessels will empty into the IVC, B: The Aorta will be larger, C: The IVC will not vary with respiration, D: The SMA can be used as a landmark to identified the aorta',
        answer: 1,
        explain: 'A: One should scan until the hepatic vessels can be seen emptying into the IVC to confirm that one is looking at the IVC.'
      },
    ]
  },  
  
  // Block 3
  {
    categoryId: 1,
    props: 'Match each letter with the correct anatomical structures:',
    usviews: ['/cardiothoracic/block3/1.gif', '/cardiothoracic/block3/2.gif', '/cardiothoracic/block3/3.gif', '/cardiothoracic/block3/4.gif', '/cardiothoracic/block3/5.gif', '/cardiothoracic/block3/6.gif', '/cardiothoracic/block3/7.gif', '/cardiothoracic/block3/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: '1. What structure does A represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 4,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '2. What structure does B represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '3. What structure does C represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 5,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '4. What structure does D represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 6,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '5. What structure does E represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 7,
        explain: ''
      },
      {
        qtype: 'reading',
        question: '6. What structure does F represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 2,
        explain: ''
      },     
      {
        qtype: 'reading',
        question: '7. What structure does G represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: '8. What are the two bumps seen on the parasternal short in the left ventricle?',
        options: 'A: Malignancy, B: Artifact, C: Physiologic anatomic variation, D: Papillary muscles',
        answer: 4,
        explain: 'D: The papillary muscles are located within the left ventricle. They attach to the atrioventricular valves via the chordae tendineae and prevent those valves from prolapse into the atrium during systole. The ideal images of the left ventricle are those that visualize the papillary muscles. This is where most of the musculature is located.'
      },
    ]
  },

  // Block 4
  {
    categoryId: 1,
    props: '26yo F with hx of lupus comes in with shortness of breath. Her vital signs are as follows: T - 100.0F, HR = 135, BP = 85/40, SPO2=100%. You perform a POCUS:',
    usviews: ['/cardiothoracic/block4/1.gif', '/cardiothoracic/block4/2.gif', '/cardiothoracic/block4/3.gif', '/cardiothoracic/block4/4.gif', '/cardiothoracic/block4/5.gif', '/cardiothoracic/block4/6.gif', '/cardiothoracic/block4/7.gif', '/cardiothoracic/block4/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. What likely was the timeframe of the pericardial fluid accumulation?',
        options: 'A: Hours-Days, B: Weeks-Months, C: Months-Years, D: Since birth',
        answer: 1,
        explain: 'A: When developed accutely, tamponade can occur with as little as 150 ml of fluid. The parietal pericardium is able to stretch over time, and chronic effusions can get up to 1L in size without tamponade physiology.'
      },
      {
        qtype: 'general',
        question: '8. The patient then goes into cardiac arrest. What should be the next step in the management of this patient?',
        options: 'A. Bedside emergent pericardiocentesis, B: CT surgery consult for a surgical management of the patient, C: Cardiology consult for cardiac drain placement, D: Administer steroids and admit to the medicine floor',
        answer: 1,
        explain: 'A: This patient is hemodynamically unstable and needs immediate management. If this patient arrests, pericardiocentesis is still indicated as the first line of treatment. There is a steep rise in pericardial pressure-volume curve pressures, resulting in a last-drop phenomenon, with the last few milliliters of fluid producing the critical compression. Draining even a few milliliters will result in significant decompression of blood flow. This procedure can be performed under dynamic ultrasound guidance.'
      },
    ]
  },
  // Block 5
  {
    categoryId: 1,
    props: '62yo M comes in with shortness of breath. His vital signs are as follows: HR 104, BP = 190/110, SPO2=91%, t=99.9f. You perform a point-of-care ECHO and obtain the following views. You perform a POCUS:',
    usviews: ['/cardiothoracic/block5/1.gif', '/cardiothoracic/block5/2.gif', '/cardiothoracic/block5/3.gif', '/cardiothoracic/block5/4.gif', '/cardiothoracic/block5/5.gif', '/cardiothoracic/block5/6.jpeg', '/cardiothoracic/block5/7.gif', '/cardiothoracic/block5/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. What should be the management for this patient?',
        options: 'A: Give 40mg IV lasix and admit to the medicine floor, B: Start Bipap, a nitro drip and admit, C: Start the patient on a nasal cannula, give 1L of fluid and antibiotics and admit, D: Give the patient 40mg IV lasix and reassess',
        answer: 2,
        explain: 'B: This patient has systolic heart failure and pulmonary fluid overload, likely cardiogenic in nature in this case. This does not necessarily mean the patient has excess fluid, but rather that the fluid is in the wrong place because the heart cannot move it forward due to systolic dysfunction. Nitroglycerin causes vasodilation, increasing capacitance of the venous system. This allows fluid to move out of the pulmonary system into the vascular system. BIPAP allows alveolar expansion, resulting in less shunting and improved blood oxygenation. Patients with severe heart failure exacerbations are candidates for management in a cardiac unit, and would be difficult to treat in a minimally monitored setting such as the medicine floor.'
      },
      {
        qtype: 'general',
        question: '8. Up to how many B-lines can be present in healthy subjects?',
        options: 'A. One, B: Two, C: Three, D: Four',
        answer: 2,
        explain: 'B: At least three B-lines should be present before considering pulmonary edema in that field. Additional fluid causes B-lines to be magnified. Normal lung contains almost entirely air, which is a poor medium for soudn waves and appear as A-lines in the lung. B-lines occur when fluid (which conducts ultrasound waves very well) is present next to air, resulting in an artifact known as a B-line or comet-tail artifacts.'
      },
    ]
  },
  // Block 6
  {
    categoryId: 1,
    props: '55yo M with a past medical history of chronic heart failure and MI, for which he recieved a drug eluting stent in the LAD, presents with a chief complaint of shortness of breath. You perform a POCUS:',
    usviews: ['/cardiothoracic/block6/1.gif', '/cardiothoracic/block6/2.gif', '/cardiothoracic/block6/3.gif', '/cardiothoracic/block6/4.gif', '/cardiothoracic/block6/5.gif', '/cardiothoracic/block6/6.gif', '/cardiothoracic/block6/7.gif', '/cardiothoracic/block6/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. What do you expect the EKG to show?',
        options: 'A: Elvations in V1, V2, V3, B: Elevations in I and AVL, C: Q waves in V1, V2, V3, D: Depressions in V1, V2, V3, V4',
        answer: 3,
        explain: 'C: This patient has a history of a past anterior wall MI, which is reflected in the septal wall motion abnormalities. Old infarcts are reflected on the EKG as Q waves, which is likely what this patient would have on EKG. This infarct possibly resulted in, or at least contributed to this patient’s heart failure.'
      },
      {
        qtype: 'general',
        question: '8. What direct evidence of pulmonary edema do you see on the cardiac views?',
        options: 'A: B-lines and a pleural effusion, B: Poor systolic function of the LV, C: Pleathoric IVC, D: Patients clinical presentation indicates they are fluid overloaded',
        answer: 1,
        explain: 'A: We can see a pleural effusion on the parasternal short view in addition to the left lung base view. ECHO and chest ultrasounds should generally be performed together in the context of shortness of breath.'
      },
    ]
  },

  // Block 7
  {
    categoryId: 1,
    props: '73yo M with a history of heart failure comes in with shortness of breath. You obtain a POCUS:',
    usviews: ['/cardiothoracic/block7/1.gif', '/cardiothoracic/block7/2.gif', '/cardiothoracic/block7/3.gif', '/cardiothoracic/block7/4.gif', '/cardiothoracic/block7/5.gif', '/cardiothoracic/block7/6.gif', '/cardiothoracic/block7/7.gif', '/cardiothoracic/block7/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. How can you distinguish if an effusion is pericardial or pleural on the parasternal long view?',
        options: 'A: Pleural effusion will not be visible on the parasternal view, B: it is not possible to distinguish a pericardial from pleural effusion on the parasternal view, C: pleural effusion will be more hyperechoic then a pericardial effusion, D: A pleural effusion would be adjacent to the descending aorta while a pericardial effusion would be separated from the aorta and closer to the heart, as seen on the parasternal view.',
        answer: 4,
        explain: 'D: pleural effusion will be adjacent to the descending aorta while a pericardial effusion will be separated from the aorta and closer to the heart as seen on the parasternal views of this patient.'
      },
    ]
  },

   // Block 8
  {
    categoryId: 1,
    props: '45yo M with a history of HTN and smoking comes in with chest pain. He denies any cardiac history. You obtain a point-of-care ECHO and obtain the following views. Please obtain any needed POCUS views, create an interpretation and use that interpretation to answer the clinical questions:',
    usviews: ['/cardiothoracic/block8/1.gif', '/cardiothoracic/block8/2.gif', '/cardiothoracic/block8/3.gif', '/cardiothoracic/block8/4.gif', '/cardiothoracic/block8/5.gif', '/cardiothoracic/block8/6.gif', '/cardiothoracic/block8/7.gif', '/cardiothoracic/block8/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. What is the appropriate disposition for this patient?',
        options: 'A: Start on Aspirin and discharge the patient, B: Admit to the observation unit for a stress test, C: Consult cardiology to obtain a cardiac catheterization, D: Call the cardiac care unit for admission',
        answer: 3,
        explain: 'C: Provided that these wall motion abnormalities are new, this likely represents acute occlusion of the LAD. This patient would benefit most from removal of the occlusion, allowing reperfusion of cardiac myocytes. A stress test in a patient with active chest pain and evidence of coronary occlusion on ECHO is inappropriate, as this will increase cardiac demand, worsening ischemia.'
      },      
      {
        qtype: 'general',
        question: '8. What do you expect the EKG to show?',
        options: 'A: Elvations in V1, V2, V3, B: Elevations in I and AVL, C: Elevations in II, III and AVF, D: Depressions in V1, V2, V3, V4',
        answer: 1,
        explain: 'A: There are regional wall motion abnormalities in the anteroseptal region, which reflects the LAD and would be seen on the anterolateral leads of the EKG (V1-V4). Presence of an acute regional wall motion abnormality reflects stunning of the myocardial cells due to ischemia of the anterior cardiac wall. Changes in regional wall motion can occur seconds after coronary occlusion, while EKG and cardiac biomarkers often take longer to exhibit changes.'
      },
    ]
  }, 

  // Block 9
  {
    categoryId: 1,
    props: '71yo M with a history of heart failure comes in with shortness of breath. Please obtain and interpret the relevent ultrasound views:',
    usviews: ['/cardiothoracic/block9/1.gif', '/cardiothoracic/block9/2.gif', '/cardiothoracic/block9/3.gif', '/cardiothoracic/block9/4.gif', '/cardiothoracic/block9/5.gif', '/cardiothoracic/block9/6.gif', '/cardiothoracic/block9/7.gif', '/cardiothoracic/block9/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. What does it signify when the mitral valve leaflet distance during full opening in diastole from the septum is large?',
        options: 'A: Heart strain, B: Heart failure, C: Healthy heart',
        answer: 2,
        explain: 'B: Mid diastole is when the mitral valve leaflet should be fully open. In a healthy heart, this valve leaflet will touch the septum. The greater the distance from the septum during mid diastole, the worse the degree of heart failure. The exact distance is measured as the E-point septal separation. A separation of 7mm is considered sensitive and specific for heart failure.'
      },      
    ]
  }, 

  // Block 10
  {
    categoryId: 1,
    props: '63yo F with a history of breast cancer comes in with shortness of breath and chest pain. You perform a POCUS:',
    usviews: ['/cardiothoracic/block10/1.gif', '/cardiothoracic/block10/2.gif', '/cardiothoracic/block10/3.gif', '/cardiothoracic/block10/4.gif', '/cardiothoracic/block10/5.gif', '/cardiothoracic/block10/6.gif', '/cardiothoracic/block10/7.gif', '/cardiothoracic/block10/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. Upon obtaining these ultrasounds, you notice the patients blood pressure is 90/60 with a heart rate of 150. What should be your next steps?',
        options: 'A: Start IV pressors, give IV fluids, start heparin and consult the ICU, B. Give lasix, start heparin and admit the patient to the floor, C: Start heparin and consult the ICU, D: Send the patient to CT aniography of the chest to assess for PE',
        answer: 1,
        explain: 'A: The echocardiographic findings in a massive PE, including right ventricular dilitation and failure with a small, vigoursly contracting LV has a very high sensitivity and specity for massive PE. PE causes right heart strain, which can be helped with extra preload. Ways to achieve this includes administering IV fluids and pressors. Heparin helps prevent further clot formation.'
      },
      {
        qtype: 'general',
        question: '8. Once you send the patient to CT scan, the patient goes into cardiac arrest. What is your next action?',
        options: 'A: Administer TPA, B: Start iV fluids and re-assess the patient after the bolus is complete, C: Consult the ICU for admission, D: Push the patient into the CT scanner to complete the CT scan',
        answer: 1,
        explain: 'A: Patients with overt signs of right heart failure indicate large clot burden and have a high mortality rate. They should be closely monitored setting in case of decompensation. With cardiac arrest in the context of a large pulmonary embolism, TPA should be administered.'
      },            
    ]
  }, 

  // Block 11
  {
    categoryId: 1,
    props: '83yo F comes in with altered mental status. She has a HR of 120, temperature of 100.8F and BP of 80/40. You perform a POCUS:',
    usviews: ['/cardiothoracic/block11/1.gif', '/cardiothoracic/block11/2.gif', '/cardiothoracic/block11/3.gif', '/cardiothoracic/block11/4.gif', '/cardiothoracic/block11/5.gif', '/cardiothoracic/block11/6.gif', '/cardiothoracic/block11/7.gif', '/cardiothoracic/block11/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. What information can we infer from the pocus view of her ivc?',
        options: 'A: She is volume overloaded, B: She is euvolemic, C: She is volume down, D: We are not able to obtain any information from this pocus of the ivc',
        answer: 3,
        explain: 'C: The collapsing IVC indicates that RA pressure is low. Coupled with a hyperdynamic heart (parasternal view), this indicates that the patient is fluid down. If the IVC were plethoric with minimal respiratory variation, this would indicate that RA are high. This can happen due to volume overload or obstruction secondary to tension pneumothorax or pulmonary embolism for example. It would be reasonable to give this patient fluid and reassess the IVC for collapsibility. Fluids can be given until observed improvement.'
      },
      {
        qtype: 'general',
        question: '8. Of the following options, which of the following is the best next step in the management of this patient?',
        options: 'A: Give diuretics, B: Give fluids, C: Do not administer fluids or diuretics',
        answer: 2,
        explain: 'B: The patient is fluid down and meets SIRS criteria (BP below 90), indicating septic shock. Standard of care for sepsis involves administering 30cc/kg of fluid until the IVC shows improvement.'
      },            
    ]
  }, 


  // Block 12
  {
    categoryId: 1,
    props: '35yo M with shortness of breath comes to the ED. Please obtain any needed POCUS views and create an interpretation. Use that interpretation to answer the clinical questions:',
    usviews: ['/cardiothoracic/block12/1.gif', '/cardiothoracic/block12/2.gif', '/cardiothoracic/block12/3.gif', '/cardiothoracic/block12/4.gif', '/cardiothoracic/block12/5.gif', '/cardiothoracic/block12/6.gif', '/cardiothoracic/block12/7.gif', '/cardiothoracic/block12/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'What is the sub-xiphoid view ideally suited to assess?',
        options: 'Gross systolic function, Pericardial effusion, Right heart strain, IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. The findings on this patients anterior lung views reflect what kind of artifact?',
        options: 'A: Side lob artifact, B: Comet tail artifact, C: Mirror artifact, D: Reverberation artifact',
        answer: 4,
        explain: 'D: Reverberation artifacts, or otherwise known as A-lines, are seen in healthy lungs. When ultrasound waves reach pleura, the majority of the energy is reflected back to the transducer. This causes a bright white hyperechoic line to appear where the pleura is. Some of the waves bounce off the transducer again, back to the lung, and then back again, which takes exactly twice the amount of time, causing the machine to think there is another pleural line at exactly 2x the depth of the actual pleura. This artifact will create weaker and weaker lines at 3x,4x and so on of the original pleura.'
      },
      {
        qtype: 'general',
        question: '8. what is the sensitivity of lung us in detecting fluid within the lung?',
        options: 'A: 50%, B: 60%, C: 70%, D: 80%, E: 90%, F: 94%',
        answer: 6,
        explain: 'F: Lung ultrasound is both sensitive and specific for diagnosis of cardiogenic pulmonary edema. 3 or more B-lines in two bilateral lung zones has a sensitivity of 94.1% and specificity of 92.4%. This is much higher than CXR or auscultation.'
      },            
    ]
  }, 

  // Block 13
  {
    categoryId: 1,
    props: '15yo M comes in with acute shortness of breath. Please obtain any needed POCUS views and create an interpretation. Use that interpretation to answer the clinical questions:',
    usviews: ['/cardiothoracic/block13/1.gif', '/cardiothoracic/block13/2.gif', '/cardiothoracic/block13/3.gif', '/cardiothoracic/block13/4.gif', '/cardiothoracic/block13/5.gif', '/cardiothoracic/block13/6.gif', '/cardiothoracic/block13/7.gif', '/cardiothoracic/block13/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Which, if any, of the following lung pathologies are present?',
        options: 'Pneumothorax, Pleural effusion, Idiopathic lung fibrosis',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. Based on this patients ultrasounds, what do you think the diagnosis is?',
        options: 'A: Coronary occlusion, B: Pneumothorax, C: Pulmonary Embolsim, D: Cardiogenic Pulmonary Edema',
        answer: 2,
        explain: 'B: In the left base lung view we see a cut-off point after which there is no lung movement. This is the lung point sign and is nearly 100% specific for pneumothorax. Because this causes obstructive shock, we see a plethoric IVC as well.'
      },
      {
        qtype: 'general',
        question: '8. While performing your ultrasound, you notice the patients breathing worsen, and his blood pressure is now 90/60 with an o2 saturation of 87%. What intervention should you perform?',
        options: 'A. Pericardiocentesis, B. Chest tube, C. Put the patient on bipap and start a levophed drip, D. Give the patient 30cc/kg of fluid and empiric antibiotics',
        answer: 2,
        explain: 'B: The concern here is that the pneumothorax has progressed to a tension pneumothorax. Immediate needle decompression or chest tube placement is indicated.'
      },            
    ]
  }, 

  // Block 14
  {
    categoryId: 1,
    props: '64yo F comes in with a chief complaint of shortness of breath. She states she has been losing weight. You perform a POCUS:',
    usviews: ['/cardiothoracic/block14/1.gif', '/cardiothoracic/block14/2.gif', '/cardiothoracic/block14/3.gif', '/cardiothoracic/block14/4.gif', '/cardiothoracic/block14/5.gif', '/cardiothoracic/block14/6.gif', '/cardiothoracic/block14/7.gif', '/cardiothoracic/block14/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'general',
        question: '7. What likely was the timeframe of the fluid accumulation?',
        options: ' A: Days-weeks, B: Years, C: Since birth',
        answer: 1,
        explain: 'A. When developed acutely, tamponade can occur with as little as 150 ml of fluid. The parietal pericardium is able to stretch over time, and chronic effusions can be up to 1L in size without displaying tamponade physiology. Effusion size poorly correlates with symptoms. Because this patient is exhibiting physiology with a moderate effusion, this suggestive of relatively rapid effusion buildup.'
      },
      {
        qtype: 'general',
        question: '8. What is the likely etiology of the pericardial effusion?',
        options: 'A. Infectious, B. Inflammatory, C. Malignant, D. Idiopathic',
        answer: 3,
        explain: 'C: A significant pericardial effusion in an elderly patient with weight loss raises concern for malignancy.'
      },            
    ]
  }, 
  // Block 15
  {
    categoryId: 1,
    props: '31yo F smoker on oral contraceptives comes in with shortness of breath and chest pain. You perform a POCUS:',
    usviews: ['/cardiothoracic/block15/1.gif', '/cardiothoracic/block15/2.gif', '/cardiothoracic/block15/3.gif', '/cardiothoracic/block15/4.gif', '/cardiothoracic/block15/5.gif', '/cardiothoracic/block15/6.gif', '/cardiothoracic/block15/7.gif', '/cardiothoracic/block15/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },        
    ]
  }, 

  // Block 16
  {
    categoryId: 1,
    props: '32yo F comes in with a chief complaint of shortness of breath and chest pain. You perform a POCUS:',
    usviews: ['/cardiothoracic/block16/1.gif', '/cardiothoracic/block16/2.gif', '/cardiothoracic/block16/3.gif', '/cardiothoracic/block16/4.gif', '/cardiothoracic/block16/5.gif', '/cardiothoracic/block16/6.gif', '/cardiothoracic/block16/7.gif', '/cardiothoracic/block16/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '7. What do you think the etiology of this patients symptoms are after having performed the POCUS?',
        options: ' A: Aortic dissection, B: Myocardial infarction, C: Tension pneumothorax, D: Pulmonary Embolism',
        answer: 4,
        explain: 'D: This POCUS has RV enlargement and McConnell’s sign (akinesia of the RV free wall with hyperdynamic function of the apex). These signs indicate right heart strain, which in a young female with chest pain and shortness of breath should raise concern for a pulmonary embolism.'
      },
    ]
  }, 



  // Block 17
  {
    categoryId: 1,
    props: '75yo M comes in with shortness of breath. You perform a POCUS:',
    usviews: ['/cardiothoracic/block17/1.gif', '/cardiothoracic/block17/2.gif', '/cardiothoracic/block17/3.jpg', '/cardiothoracic/block17/4.gif', '/cardiothoracic/block17/5.gif', '/cardiothoracic/block17/6.gif', '/cardiothoracic/block17/7.gif', '/cardiothoracic/block17/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '7.  What does the measured value indicate?',
        options: 'A: Normal heart function, B: Hyperdynamic contractility, C: Heart failure, D: Pulmonary embolism',
        answer: 3,
        explain: 'C: E-point septal separation value, which is the measurement of how close the mitral valve leaflet comes to the septum at its closest point during diastole. In a healthy heart this distance is usually less than 7 mm. A large distance >10mm indicates heart failure. This can be easily grossly assessed; however, it is good to have an idea of what the exact measurements are.'
      },
    ]
  }, 

    // Block 18
  {
    categoryId: 1,
    props: '83yo F with sob and a history of copd and chf comes in with shortness of breath. you perform a pocus: ',
    usviews: ['/cardiothoracic/block18/1.gif', '/cardiothoracic/block18/2.gif', '/cardiothoracic/block18/3.gif', '/cardiothoracic/block18/4.gif', '/cardiothoracic/block18/5.gif', '/cardiothoracic/block18/6.gif', '/cardiothoracic/block18/7.gif', '/cardiothoracic/block18/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '7. The patients oxygen saturation is found to be 85%. Of the following options, which is the best next step in the management of this patient?',
        options: 'A: Pericardiocentesis, B: Chest tube, C: Bipap, D: IV fluid bolus',
        answer: 3,
        explain: 'C: This patient has a history of heart failure and is found to have pulmonary edema and hypoxia, indicating that this is a heart failure exacerbation. Of the given options, the most reasonable is BIPAP, which would directly address the hypoxia caused by pulmonary edema. There is no pathology that would be helped by a chest tube. The pericardial effusion seen on one view (parasternal long) is small, and there are no signs of cardiac tamponade.'
      },
    ]
  }, 

    // Block 19
  {
    categoryId: 1,
    props: '75yo M comes in with shortness of breath. His blood pressure is 80/50. You perform a POCUS:',
    usviews: ['/cardiothoracic/block19/1.gif', '/cardiothoracic/block19/2.gif', '/cardiothoracic/block19/3.gif', '/cardiothoracic/block19/4.gif', '/cardiothoracic/block19/5.gif', '/cardiothoracic/block19/6.gif', '/cardiothoracic/block19/7.gif', '/cardiothoracic/block19/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '7. What form of shock is the patient in? ',
        options: 'A: Obstructive, B: Hypovolemic, C: Neurogenic, D: Cardiogenic',
        answer: 4,
        explain: 'D: This patient has severe systolic heart failure and pulmonary edema, likely cardiogenic in nature. This patient should be started on a pressor (such as dobutamine) to increase heart contractility and transferred to a cardiac care unit.'
      },
    ]
  }, 

    // Block 20
  {
    categoryId: 1,
    props: '15yo M with a history of a nephrotic syndrome presents with shortness of breath. You perform a POCUS:',
    usviews: ['/cardiothoracic/block20/1.gif', '/cardiothoracic/block20/2.gif', '/cardiothoracic/block20/3.gif', '/cardiothoracic/block20/4.gif', '/cardiothoracic/block20/5.gif', '/cardiothoracic/block20/6.gif', '/cardiothoracic/block20/7.gif', '/cardiothoracic/block20/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '7. What form of shock is the patient in? ',
        options: 'A: Obstructive, B: Hypovolemic, C: Neurogenic, D: Cardiogenic',
        answer: 1,
        explain: 'A: This patient has multiple signs of acute onset right heart strain, raising concern for a pulmonary embolism, which is a form of obstructive shock. This patients nephrotic syndrome makes him hypercoagulable due to loss of anti-thrombotic factors in the urine.'
      },
    ]
  }, 


    // Block 21
  {
    categoryId: 1,
    props: ' 45yo previously healthy M comes in with chest pain. You perform a POCUS: ',
    usviews: ['/cardiothoracic/block21/1.gif', '/cardiothoracic/block21/2.gif', '/cardiothoracic/block21/3.gif', '/cardiothoracic/block21/4.gif', '/cardiothoracic/block21/5.gif', '/cardiothoracic/block21/6.gif', '/cardiothoracic/block21/7.gif', '/cardiothoracic/block21/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '7. Of the following options, which is the best next step in the management of this patient?',
        options: 'A: Consult cardiology, B: OBtain a CT angiogram to look for pulmonary embolsim, C: Consult CT surgery, D: Discharge the patient',
        answer: 1,
        explain: 'A: This patient has some anterior and mostly lateral wall motion abnormalities. With no past medical history and chest pain, this is concerning for an occlusion of the artery supplying blood to that part of the heart, resulting in myocardial stunning. This patient should have a cardiac catheterization performed as soon as possible.'
      },
    ]
  }, 

    // Block 22
  {
    categoryId: 1,
    props: ' 24yo M with no past medical history comes in with chest pain. You perform a POCUS:',
    usviews: ['/cardiothoracic/block22/1.gif', '/cardiothoracic/block22/2.gif', '/cardiothoracic/block22/3.gif', '/cardiothoracic/block22/4.gif', '/cardiothoracic/block22/5.gif', '/cardiothoracic/block22/6.gif', '/cardiothoracic/block22/7.gif', '/cardiothoracic/block22/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC, No IVC Visualized',
        answer: 4,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '7. The patients pain has now resolved. He states he has no past medical history. Of the following options, which is the best next step in the management of this patient?',
        options: 'A: Consult cardiology", "B:  Obtain a chest xray", "C: Consult CT surgery", "D: Discharge the patient',
        answer: 4,
        explain: 'D: There are no abnormalities on this POCUS to indicate any specific pathology. Of the options presented, discharging the patient is the most reasonable option. Obtaining a chest xray will offer no additional information that the ultrasound did not already elucidate.'
      },
    ]
  }, 

    // Block 23
  {
    categoryId: 1,
    props: '62yo M comes in with chest pain. You perform a POCUS:',
    usviews: ['/cardiothoracic/block23/1.gif', '/cardiothoracic/block23/2.gif', '/cardiothoracic/block23/3.gif', '/cardiothoracic/block23/4.gif', '/cardiothoracic/block23/5.gif', '/cardiothoracic/block23/6.gif', '/cardiothoracic/block23/7.gif', '/cardiothoracic/block23/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC, No IVC Visualized',
        answer: 4,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '7. What likely was the timeframe of the pericardial fluid accumulation? ',
        options: 'A: Hours-Days, B: Seconds-Minutes, C: Months-Years, D: Since birth',
        answer: 3,
        explain: 'C: This patient has no POCUS findings of tamponode. The IVC is not pleathoric, and the right ventricle does not have scalloping or bowing inward of the right ventricle or atrium at any point during the cardiac cycle. This effusion is chronic, and occured likely over a long timeframe.'
      },
    ]
  }, 

      // Block 24
  {
    categoryId: 1,
    props: '64yo F with a history of reported heart problems is found to have cellulitis in the emergency department. You perform a POCUS:',
    usviews: ['/cardiothoracic/block24/1.gif', '/cardiothoracic/block24/2.gif', '/cardiothoracic/block24/3.gif', '/cardiothoracic/block24/4.gif', '/cardiothoracic/block24/5.gif', '/cardiothoracic/block24/6.gif', '/cardiothoracic/block24/7.gif', '/cardiothoracic/block24/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 2,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '7. Of the following options, which of the following are reasonable next steps in the management of this patient?',
        options: 'A: Give 1L normal saline bolus and antibiotics, B: Give antibiotics alone, C: Give 250cc of normal saline alone, D: B and C',
        answer: 2,
        explain: 'B: This patient has severe heart failure. The amount of fluids given should be limited in general in patients with heart failure. As this patient has a clearly plethoric IVC, fluids should be witheld as giving them can cause cardiogenic pulmonary overload. The patient should be given antibiotics for the cellulitis.'
      },
    ]
  }, 

        // Block 25
  {
    categoryId: 1,
    props: '35yo previously healthy M comes in with shortness of breath, fever and cough. His oxygen saturation is 90%. You perform a POCUS:',
    usviews: ['/cardiothoracic/block25/1.gif', '/cardiothoracic/block25/2.gif', '/cardiothoracic/block25/3.gif', '/cardiothoracic/block25/4.gif', '/cardiothoracic/block25/5.gif', '/cardiothoracic/block25/6.gif', '/cardiothoracic/block25/7.gif', '/cardiothoracic/block25/8.gif'],
    questionInfo: [
      {
        qtype: 'reading',
        question: 'Do you see any Pericardial effusion? If so, is there evidence of tamponode physiology',
        options: 'No pericardial effusion, Pericardial effusion present, Pericardial effusion with evidence of tamponade physiology',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'How is the Heart Function?',
        options: 'Normal, Systolic Dysfunction',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see any focal motion abnormalities in the left ventricle?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Please interpret the IVC',
        options: 'Normal, Plethoric IVC, Collapsing IVC',
        answer: 3,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see evidence of Right heart strain?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },
      {
        qtype: 'reading',
        question: 'Do you see a Pleural effusion?',
        options: 'No, Yes',
        answer: 1,
        explain: ''
      },    
      {
        qtype: 'general',
        question: '7. Of the following options, which of the following are reasonable next steps in the management of this patient?',
        options: 'A: Administer lasix", "B: Administer fluids and antibiotics", "C: Place the patient on bipap", "D: Discharge the patient',
        answer: 2,
        explain: 'B: This patient has severe heart failure. The amount of fluids given should be limited in general in patients with heart failure. As this patient has a clearly plethoric IVC, fluids should be witheld as giving them can cause cardiogenic pulmonary overload. The patient should be given antibiotics for the cellulitis.'
      },
    ]
  }, 

]
module.exports = cardioBlockList