const cardioBlockList = [
  // Block 1
  {
    categoryId: 1,
    props: '47yo female came in with shortness of breath, pleuritic pain and tachycardia. She takes over the counter contraceptives. Please perform a point-of-care ECHO and obtain any needed views. You perform a POCUS:',
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
        options: 'Normal, Mild-moderate systolic dysfunction, Severe systolic dysfunction',
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
        options: 'No, Plethoric IVC, Collapsing',
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
    ]
  },

  // Block 2
  {
    categoryId: 1,
    props: 'Match each letter with the correct anatomical structures',
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What structure does A represent',
        options: 'IVC, RV, RA, Liver, Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does B represent?',
        options: 'IVC, RV, RA, Liver, Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does C represent?',
        options: 'IVC, RV, RA, Liver, Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does D represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending Aorta, Ascending Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does E represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending Aorta, Ascending Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does F represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending Aorta, Ascending Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does G represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending Aorta, Ascending Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does H represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending Aorta, Ascending Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does I represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending Aorta, Ascending Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does J represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending Aorta, Ascending Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does K represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending Aorta, Ascending Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does L represent?',
        options: 'RA, RV, LA, LV, Aortic outflow tract, Descending Aorta, Ascending Aorta',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'general',
        question: 'What is the normal lv: rv ratio?',
        options: '1:1, 1:.6, 6:1, 2:1',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'general',
        question: 'How can one tell if it is the aorta or ivc visualized in the subxiphoid view?',
        options: 'The hepatic vessels will empty into the ivc, The aorta will be larger, The ivc will not vary with respiration, The sma can be used as a landmark to identified the aorta',
        answer: 1,
        explain: 'asdf'
      },
    ]
  },

  // Block 3
  {
    categoryId: 1,
    props: 'Match each letter with the correct anatomical structures:',
    questionInfo: [
      {
        qtype: 'reading',
        question: 'What structure does A represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does B represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does C represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does D represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does E represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does F represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'reading',
        question: 'What structure does G represent?',
        options: 'LV, RV, Anterior wall, Septal wall, Lateral wall, Posterior wall, Inferior wall',
        answer: 1,
        explain: 'asdf'
      },
      {
        qtype: 'general',
        question: 'What are the two bumps seen in the parasternal long seen in the right ventricle?',
        options: 'Malignancy, Artifact, Physiologic anatomic variation, Papillary muscles',
        answer: 1,
        explain: 'asdf'
      },
    ]
  },
]

module.exports = cardioBlockList