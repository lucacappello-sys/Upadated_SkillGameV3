// *** IMPORTAZIONE ESPLICITA DELLE IMMAGINI ***
import role1Img from '../assets/images/Smart operator.png';
import role2Img from '../assets/images/Plant.png';
import role3Img from '../assets/images/Tech.png';

import sector1Img from '../assets/images/Food.png';
import sector2Img from '../assets/images/Automotive.png';
import sector3Img from '../assets/images/Logistic.png';


import sector4Img from '../assets/images/Food.png';
import sector5Img from '../assets/images/Automotive.png';


export const IMAGES = {
  role1: role1Img,
  role2: role2Img,
  role3: role3Img,
  sector1: sector1Img,
  sector2: sector2Img,
  sector3: sector3Img,
  sector4: sector4Img,
  sector5: sector5Img,
};

export const ROLE_COLORS: Record<number, string> = {
  1: '#3FACE2', // Blue
  2: '#E69B38', // Orange
  3: '#2956A5'  // Navy
};

export const ROLES = [
  {
    id: 1,
    label: 'Role 1',
    title: 'SMART LINE OPERATOR',
    description: 'Works alongside robots in shared areas, supervises their operations, and performs basic troubleshooting. As robots handle the most manual and repetitive tasks, this role requires broader skills than before, especially technical, analytical, and collaboration skills.',
    colorClass: 'card-color--blue',
    illustration: IMAGES.role1
  },
  {
    id: 2,
    label: 'Role 2',
    title: 'PLANT FLOW-KEEPER',
    description: 'Manages and coordinates the team and work area, supervises production flows, supports operators and robots and ensures process efficiency. The role combines strong management, technical, operational, and analytical skulls to plan activities, resolve medium-level issues, and maintain smooth and safe production operations.',
    colorClass: 'card-color--orange',
    illustration: IMAGES.role2
  },
  {
    id: 3,
    label: 'Role 3',
    title: 'TECH SOLVER',
    description: 'Acts as the reference for programming robots, configuring systems to optimise production processes, performing maintenance, and solving technical issues. Requires strong technical skills on new programming codes and solid analytical skills.',
    colorClass: 'card-color--navy',
    illustration: IMAGES.role3
  }
];

export const SECTORS = [
  {
    id: 1,
    label: 'Sector 1',
    title: 'FOOD SECTOR',
    description: 'In the food sector, products are received directly from the field in various-sized boxes and bins. These items need to be sorted gently based on dimensions, and then packed to meet market requirements. The new Industry 5.0 technologies enable automated sorting and packing by using new gripping concepts, increasing efficiency and ensuring product quality.',
    colorClass: 'card-color--sector-light',
    illustration: IMAGES.sector1
  },
  {
    id: 2,
    label: 'Sector 2',
    title: 'AUTOMOTIVE SECTOR',
    description: 'In the automotive sector, common activities include order preparation for part delivery, kitting, and assembly. Robotics technologies aim to enhance productivity by performing tasks like sorting, identifying, and packing parts for shipment, while also reducing errors.',
    colorClass: 'card-color--sector-medium',
    illustration: IMAGES.sector2
  },
  {
    id: 3,
    label: 'Sector 3',
    title: 'LOGISTIC SECTOR',
    description: 'The logistics sector deals with a challenging variety of products. The new Industry 5.0 technologies aim at streamlining the order preparation process and stock management by using AI-enhanced robots, capable of handling diverse product characteristics. ',
    colorClass: 'card-color--sector-dark',
    illustration: IMAGES.sector3
  },
  {
    id: 4,
    label: 'Sector 4',
    title: 'CONSUMER GOODS SECTOR',
    description: 'In the consumer goods sector, production lines are often configured to produce only 1 to 3 variants of the same product, limiting flexibility and slowing output. The new Industry 5.0 technologies enable flexible and adaptive assembly processes, improving handling capabilities and supporting mass-customisation production.',
    colorClass: 'card-color--sector-light',
    illustration: IMAGES.sector4
  },
  {
    id: 5,
    label: 'Sector 5',
    title: 'HAND TOOLS SECTOR',
    description: 'In the hand tools sector, each production step requires high manual precision to achieve the final product. Industry 5.0 technologies will facilitate fixtureless assembly and enhance process efficiency, reducing manual strain while maintaining precision.',
    colorClass: 'card-color--sector-medium',
    illustration: IMAGES.sector5
  }
];


export const SKILLS_DATA: Record<string, string[]> = {
  technical: [
    'Quality assessment', 'Turning on machines/robot', 'Setting up the activity',
    'Use of the Robot controller', 'Statistical process control', 'Understanding the Robot coding language',
    'Data processing', 'Knowledge of robot mechanisms', 'General programming skills',
    'Setting up the robot', 'Robot programming', 'Understand the robot feedback',
    'Know how to interact with robots', 'Process awareness', 'Technical issues resolution',
    'Digital systems usage', 'Digital data management', 'System state interpretation',
    'Technical inspection', 'Algorithms output understanding', 'Problem / Alert management',
    'Machine/Robot maintenance', 'Machine/Robot setting parameters', 'Working with high-tech sensors'
  ],
  operational: [
    'Procedures knowledge of error situation', 'Task knowledge', 'Time management',
    'Coping with pressure', 'Situational awareness', 'Fast task execution',
    'Procedures knowledge', 'Handling unexpected events and emergencies'
  ],
  analytical: [
    "Problem solving", "Data interpretation", "Decision Making",
    "Making time-critical decisions", "Risk assessment", "Problem identification",
    "Predictive maintenance", "Preventive maintenance",
  ],
  collaboration: [
    'Conflict resolution', 'Team management', 'Supervising staff',
    'Risk assessment', 'Monitoring workers\' safety on the production floor',
    'Monitoring security procedures in warehouse operations'
  ],
  management: [
    'Task/Production planning', 'Safety checking', 'Conflict resolution',
    'Team management', 'Supervising staff', 'Risk assessment',
    'Monitoring workers\' safety on the production floor',
    'Monitoring security procedures in warehouse operations'
  ],
  personal: [
    'Responsiveness', 'Adapting to changing situations', 'Manual Dexterity',
    'Meet commitments (e.g., working plan and deadlines)', 'Observation skills',
    'Dealing with challenging and stressful work conditions', 'Physical strength'
  ],
  interaction: [
    'Production monitoring', 'Use gesture-based controls', 'Interact physically with cobots',
    'Navigate and operate touchscreen-based interfaces', 'Use voice commands to start, stop, or adjust machinery without physical interaction.',
    'Collaborate with robotic systems in shared workspaces', 'Respond to haptic (vibration) signals or tactile feedback',
    'Utilize AR devices (such as smart glasses or tablets) to receive real-time, step-by-step assembly instructions and visual guidance.'
  ]
};

export const ROLE_PROFILES: Record<number, { skills: { name: string, value: number }[], tasks: { name: string, color: string }[] }> = {
  1: {
    skills: [
      { name: 'Technical', value: 70 }, { name: 'Interaction/UX', value: 60 },
      { name: 'Analytical', value: 50 }, { name: 'Collaboration/Communication', value: 80 },
      { name: 'Personal/soft', value: 60 }, { name: 'Operational', value: 90 },
      { name: 'Management', value: 30 }
    ],
    tasks: [
      { name: 'Planning and configuration', color: '#00b894' },
      { name: 'Execution and Operation', color: '#fdcb6e' },
      { name: 'Management and Supervision', color: '#0984e3' },
      { name: 'Collaboration and Assistance', color: '#ff7675' },
      { name: 'Quality control', color: '#a29bfe' },
      { name: 'Handling of Alarms and Failures', color: '#e17055' }
    ]
  },
  2: {
    skills: [
      { name: 'Technical', value: 60 }, { name: 'Interaction/UX', value: 50 },
      { name: 'Analytical', value: 70 }, { name: 'Collaboration/Communication', value: 90 },
      { name: 'Personal/soft', value: 80 }, { name: 'Operational', value: 50 },
      { name: 'Management', value: 90 }
    ],
    tasks: [
      { name: 'Planning and configuration', color: '#00b894' },
      { name: 'Execution and Operation', color: '#fdcb6e' },
      { name: 'Management and Supervision', color: '#0984e3' },
      { name: 'Collaboration and Assistance', color: '#ff7675' },
      { name: 'Quality control', color: '#a29bfe' },
      { name: 'Handling of Alarms and Failures', color: '#e17055' }
    ]
  },
  3: {
    skills: [
      { name: 'Technical', value: 95 }, { name: 'Interaction/UX', value: 80 },
      { name: 'Analytical', value: 90 }, { name: 'Collaboration/Communication', value: 50 },
      { name: 'Personal/soft', value: 40 }, { name: 'Operational', value: 60 },
      { name: 'Management', value: 40 }
    ],
    tasks: [
      { name: 'Planning and configuration', color: '#00b894' },
      { name: 'Execution and Operation', color: '#fdcb6e' },
      { name: 'Management and Supervision', color: '#0984e3' },
      { name: 'Collaboration and Assistance', color: '#ff7675' },
      { name: 'Quality control', color: '#a29bfe' },
      { name: 'Handling of Alarms and Failures', color: '#e17055' }
    ]
  }
};