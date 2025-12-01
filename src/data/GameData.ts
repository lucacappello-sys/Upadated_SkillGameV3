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
  1: '#3FACE2',
  2: '#E69B38',
  3: '#2956A5'
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
    description: 'The logistics sector deals with a challenging variety of products. The new Industry 5.0 technologies aim at streamlining the order preparation process and stock management by using AI-enhanced robots, capable of handling diverse product characteristics. ',
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


export const ROLE_PROFILES: Record<number, { skills: { name: string, value: number }[], tasks: { name: string, value: number, color: string }[] }> = {
  1: {
    skills: [
      { name: 'Technical', value: 83 },
      { name: 'Interaction/UX', value: 53 },
      { name: 'Analytical', value: 50 },
      { name: 'Collaboration/ Communication', value: 43 },
      { name: 'Personal/soft', value: 34 },
      { name: 'Operational', value: 25 },
      { name: 'Management', value: 18 }
    ],
    tasks: [
      { name: 'Planning and configuration', value: 7, color: '#009B76' },
      { name: 'Execution and Operation', value: 60, color: '#E0A727' },
      { name: 'Management and Supervision', value: 11, color: '#007BF4' },
      { name: 'Collaboration and Assistance', value: 3.6, color: '#DD455F' },
      { name: 'Quality control', value: 7, color: '#DD6BDA' },
      { name: 'Handling of Alarms and Failures', value: 11, color: '#8E554F' }
    ]
  },
  2: {
    skills: [
      { name: 'Technical', value: 72 },
      { name: 'Interaction/UX', value: 67 },
      { name: 'Analytical', value: 55 },
      { name: 'Management', value: 55 },
      { name: 'Collaboration/ Communication', value: 43 },
      { name: 'Personal/soft', value: 35 },
      { name: 'Operational', value: 28 },

    ],
    tasks: [
      { name: 'Planning and configuration', value: 27, color: '#009B76' },
      { name: 'Execution and Operation', value: 5, color: '#E0A727' },
      { name: 'Management and Supervision', value: 32, color: '#007BF4' },
      { name: 'Collaboration and Assistance', value: 13.5, color: '#DD455F' },
      { name: 'Quality control', value: 4.5, color: '#DD6BDA' },
      { name: 'Handling of Alarms and Failures', value: 18, color: '#8E554F' }
    ]
  },
  3: {
    skills: [
      { name: 'Technical', value: 88 },
      { name: 'Analytical', value: 72.6 },
      { name: 'Interaction/UX', value: 50 },
      { name: 'Operational', value: 30 },
      { name: 'Collaboration/ Communication', value: 15 },
      { name: 'Personal/soft', value: 0 },
      { name: 'Management', value: 0 }
    ],
    tasks: [
      { name: 'Planning and configuration', value: 16.5, color: '#009B76' },
      { name: 'Execution and Operation', value: 0, color: '#E0A727' },
      { name: 'Management and Supervision', value: 33, color: '#007BF4' },
      { name: 'Collaboration and Assistance', value: 0, color: '#DD455F' },
      { name: 'Quality control', value: 0, color: '#DD6BDA' },
      { name: 'Handling of Alarms and Failures', value: 50, color: '#8E554F' }
    ]
  }
};

// =============================================
// SCORING DATA
// =============================================

// All skills organized by category for the UI
export const ALL_SKILLS_UI: Record<string, string[]> = {
  "personal": [
    'Responsiveness',
    'Adapting to changing situations',
    'Manual Dexterity',
    'Meet commitments (e.g., working plan and deadlines)',
    'Observation skills',
    'Dealing with challenging and stressful work conditions',
    'Physical strength'
  ],
  "management": [
    'Task/Production planning',
    'Safety checking',
    'Conflict resolution',
    'Team management',
    'Supervising staff',
    'Risk assessment',
    'Monitoring workers\' safety on the production floor',
    'Monitoring security procedures in warehouse operations'
  ],
  "collaboration": [
    'Revising algorithm\'s suggestion',
    'Digital System/Machine/Robot automatic reports understanding',
    'Coordination across operators',
    'Coordination with the robot work',
    'Assisting others in complex situations',
    'Understand AI-generated insights',
    'Provide feedback to AI systems',
    'Assign and manage tasks',
    'Avoid collision with AI'
  ],
  "interaction": [
    'Navigate and operate touchscreen-based interfaces',
    'Utilize AR devices (such as smart glasses or tablets) to receive real-time, step-by-step assembly instructions and visual guidance',
    'Production monitoring',
    'Use voice commands to start, stop, or adjust machinery without physical interaction',
    'Collaborate with robotic systems in shared workspaces',
    'Use gesture-based controls',
    'Respond to haptic (vibration) signals or tactile feedback',
    'Interact physically with cobots'
  ],
  "analytical": [
    'Problem solving',
    'Data interpretation',
    'Decision Making',
    'Making time-critical decisions',
    'Problem identification',
    'Predictive maintenance',
    'Preventive maintenance'
  ],
  "operational": [
    'Procedures knowledge of error situation',
    'Process awareness',
    'Task knowledge',
    'Time management',
    'Coping with pressure',
    'Situational awareness',
    'Fast task execution',
    'Procedures knowledge',
    'Handling unexpected events and emergencies'
  ],
  "technical": [
    'Technical issues resolution',
    'Digital systems usage',
    'Digital data management',
    'System state interpretation',
    'Technical inspection',
    'Problem / Alert management',
    'Algorithms output understanding',
    'Quality assessment',
    'Setting up the activity',
    'Statistical process control',
    'Understanding AI systems',
    'Data processing',
    'Coding',
    'Knowledge of Machine/Robot task',
    'Machine/Robot maintenance',
    'Machine/Robot setting parameters',
    'Turning on machines/robot',
    'Use of the Robot controller',
    'Understanding the Robot coding/language',
    'Knowledge of robot mechanisms',
    'Setting up the robot',
    'Robot programming',
    'Understand the robot feedback',
    'Deburring',
    'Scanning',
    'Fly the drone',
    'Robot Trajectory revision',
    'Operating mobile plant',
    'Driving vehicles',
    'Monitor moving workpiece in a machine'
  ]
};

// Correct skills for each role-sector combination
export const CORRECT_SKILLS_DATA: Record<string, Record<string, string[]>> = {
  "AUTOMOTIVE SECTOR": {
    "SMART LINE OPERATOR": [
      "Task knowledge",
      "Procedures knowledge of error situation",
      "Situational awareness",
      "Use of the Robot controller",
      "Process awareness",
      "Understand the robot feedback",
      "Know how to interact with robots",
      "Technical issues resolution",
      "Knowledge of Machine/Robot task",
      "Coordination with the robot work",
      "Collaborate with robotic systems in shared workspaces"
    ],
    "PLANT FLOW-KEEPER": [
      "Know how to interact with robots",
      "Use of the Robot controller",
      "Understand the robot feedback",
      "Handling unexpected events and emergencies",
      "Coordination across operators",
      "Conflict resolution",
      "Team management",
      "Supervising staff",
      "Monitoring security procedures in warehouse operations"
    ],
    "TECH SOLVER": [
      "Knowledge of robot mechanisms",
      "Robot programming",
      "Know how to interact with robots",
      "Use of the Robot controller",
      "Understand the robot feedback",
      "Technical issues resolution",
      "Technical inspection",
      "Interact physically with cobots",
      "Problem identification"
    ]
  },
  "FOOD SECTOR": {
    "SMART LINE OPERATOR": [
      "System state interpretation",
      "Turning on machines/robot",
      "Setting up the robot",
      "Problem / Alert management",
      "Quality assessment",
      "Use of the Robot controller",
      "Understand the robot feedback",
      "Process awareness",
      "Digital systems usage",
      "Know how to interact with robots",
      "Coordination with the robot work",
      "Situational awareness",
      "Task knowledge",
      "Procedures knowledge",
      "Procedures knowledge of error situation",
      "Production monitoring",
      "Collaborate with robotic systems in shared workspaces"
    ],
    "PLANT FLOW-KEEPER": [
      "Task/Production planning",
      "Safety checking",
      "Setting up the activity",
      "Machine/Robot setting parameters",
      "Digital systems usage",
      "Risk assessment",
      "Problem identification",
      "Task knowledge",
      "Handling unexpected events and emergencies"
    ],
    "TECH SOLVER": [
      "Technical inspection",
      "Use of the robot controller",
      "Data interpretation",
      "Knowledge of robot mechanisms",
      "Know how to interact with robots",
      "Robot programming",
      "Technical issues resolution",
      "Understand the robot feedback",
      "Problem identification"
    ]
  },
  "LOGISTIC SECTOR": {
    "SMART LINE OPERATOR": [
      "Task knowledge",
      "Procedures knowledge of error situation",
      "Use of the Robot controller",
      "Problem / Alert management",
      "Setting up the activity",
      "System state interpretation",
      "Machine/robot setting parameters",
      "Process awareness",
      "Know how to interact with robots",
      "Task/Production planning",
      "Safety checking",
      "Decision making",
      "Problem solving",
      "Problem identification",
      "Data interpretation",
      "Coordination with the robot work"
    ],
    "PLANT FLOW-KEEPER": [
      "Task/Production planning",
      "Alert management",
      "Safety checking",
      "Data interpretation",
      "Decision Making"
    ],
    "TECH SOLVER": [
      "Predictive maintenance",
      "Data interpretation",
      "Use of the Robot controller",
      "Setting up the robot",
      "Machine/robot setting parameters",
      "Understanding the Robot coding/language",
      "Technical inspection",
      "Algorithms output understanding",
      "Knowledge of robot mechanisms",
      "Digital System/Machine/Robot automatic reports understanding",
      "Alert management",
      "Safety checking",
      "Interact physically with cobots",
      "Understand the robot feedback"
    ]
  },
  "HAND TOOLS SECTOR": {
    "SMART LINE OPERATOR": [
      "Use of the Robot controller",
      "Setting up the robot",
      "Setting up the activity",
      "Problem / Alert management",
      "System state interpretation",
      "Know how to interact with robots",
      "Process awareness",
      "Task knowledge",
      "Data interpretation",
      "Problem identification",
      "Problem solving"
    ],
    "PLANT FLOW-KEEPER": [
      "Use of the Robot controller",
      "Setting up the robot",
      "Setting up the activity",
      "Problem / Alert management",
      "System state interpretation",
      "Know how to interact with robots",
      "Process awareness",
      "Task knowledge",
      "Data interpretation",
      "Problem identification",
      "Problem solving"
    ],
    "TECH SOLVER": [
      "Technical inspection",
      "Use of the Robot controller",
      "Data interpretation",
      "Knowledge of robot mechanisms",
      "Know how to interact with robots",
      "Robot programming",
      "Technical issues resolution",
      "Understand the robot feedback",
      "Problem identification"
    ]
  },
  "CONSUMER GOODS SECTOR": {
    "SMART LINE OPERATOR": [
      "Quality assessment"
    ],
    "PLANT FLOW-KEEPER": [
      "Use of the Robot controller",
      "Understanding AI systems",
      "Knowledge of Machine/Robot task",
      "Setting up the activity",
      "Problem / Alert management",
      "Task knowledge",
      "Making time critical decisions",
      "Task/Production planning",
      "Problem solving"
    ],
    "TECH SOLVER": [
      "Data processing",
      "Technical inspection",
      "Use of the Robot controller",
      "Data processing",
      "Machine/Robot maintenance",
      "Knowledge of robot mechanisms",
      "Understanding the Robot coding/language",
      "Understandin AI systems",
      "Data interpretation",
      "Problem solving",
      "Decision making",
      "Problem identification"
    ]
  }
};

// Create a map from skill name to category for quick lookup
const SKILL_TO_CATEGORY_MAP = (() => {
  const map = new Map<string, string>();
  for (const [category, skills] of Object.entries(ALL_SKILLS_UI)) {
    for (const skill of skills) {
      map.set(skill, category);
    }
  }
  return map;
})();

export const getSkillCategory = (skill: string): string | undefined => {
  return SKILL_TO_CATEGORY_MAP.get(skill);
};

// Helper function to get correct skills for a role-sector combination
export const getCorrectSkills = (roleName: string, sectorName: string): string[] => {
  const sectorData = CORRECT_SKILLS_DATA[sectorName];
  if (!sectorData) return [];
  return sectorData[roleName] || [];
};