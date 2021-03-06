const ruqBlockList = [
  {
    categoryId: 4,
    props: 'this is a props',
    usviews: [],
    questionInfo: [
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
    ],
    interpretation: [
      'Answer',
      'Interpretation',
      'Impression'
    ]
  },

  // Block 2
  {
    categoryId: 4,
    props: 'this is a props',
    usviews: [],
    questionInfo: [
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
]

module.exports = ruqBlockList