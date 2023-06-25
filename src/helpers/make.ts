const fs = require('fs');
const path = require('path');

function makeFiles(folderName: string, name: string, props: object) {
  // ALL FUNCTIONS
  let mkDir = path.resolve(__dirname, '..', folderName);
  let readFromExample = (name: string) => {
    return fs
      .readFileSync(path.resolve(__dirname, 'example', name), 'utf8')
      .toString();
  };
  let replaceName = (content: string) => {
    let splitContent = content.split('\n');
    for (let i in splitContent) {
      if (splitContent[i].includes('from')) {
        splitContent[i] = splitContent[i].replace(
          /example./g,
          folderName + '.',
        );
      }
    }
    content = splitContent.join('\n');
    content = content
      .replace(/@Controller('example')/, `@Controller('${name}')`)
      .replace(/example/g, name[0].toLowerCase() + name.slice(1, name.length))
      .replace(/Example/g, name);
    return content;
  };

  let writeProps = (content: string) => {
    let propsArea: string = '';
    for (let i in props) {
      propsArea += `@Prop(${props[i][1]})\n\t${i}:${props[i][0]};\n\n\t`;
    }

    return content.replace(/'props'/, propsArea);
  };

  let writeCreateDto = (content: string) => {
    let str = '';
    for (let i in props) {
      str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}: ${
        props[i][0].length > 10 ? 'number' : props[i][0]
      };\n\n\t`;
    }
    return content.replace(/'dto'/, str);
  };

  let writeUpdateDto = (content: string) => {
    let str = '';
    for (let i in props) {
      str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}?: ${
        props[i][0].length > 10 ? 'number' : props[i][0]
      };\n\n\t`;
    }
    return content.replace(/'dto'/, str);
  };

  // FUNTIONS END

  try {
    fs.mkdirSync(mkDir);
  } catch (error) {
    console.log('Folder is already created.');
  }
  let controller = readFromExample('example.controller.ts');
  let module = readFromExample('example.module.ts');
  let service = readFromExample('example.service.ts');
  let schema = readFromExample('schemas/example.schema.ts');
  let createDtoFile = readFromExample('dto/create-example.dto.ts');
  let updateDtoFile = readFromExample('dto/update-example.dto.ts');

  // CREATE CONTROLLER FILE
  try {
    fs.writeFileSync(
      mkDir + `/${folderName}.controller.ts`,
      replaceName(controller),
    );
    console.log('Controller created');
  } catch (error) {
    console.log('Controllerda Yozishda xatolik');
  }

  // CREATE SERVICE FILE
  try {
    fs.writeFileSync(mkDir + `/${folderName}.service.ts`, replaceName(service));
    console.log('Service created');
  } catch (error) {
    console.log('Service Yozishda xatolik');
  }

  // CREATE MODULE FILE
  try {
    fs.writeFileSync(mkDir + `/${folderName}.module.ts`, replaceName(module));
    console.log('Module created');
  } catch (error) {
    console.log('Module Yozishda xatolik');
  }

  // CREATE SCHEMA
  try {
    try {
      fs.mkdirSync(mkDir + '/schemas');
      console.log('Schema created');
    } catch (error) {
      console.log('Schema Papka oldin bor edi.');
    }
    fs.writeFileSync(
      mkDir + `/schemas/${folderName}.schema.ts`,
      writeProps(replaceName(schema)),
    );
    console.log('Schema created');
  } catch (error) {
    console.log('Schema Yozishda xatolik');
  }

  // CREATE DTO FOLDER
  try {
    fs.mkdirSync(mkDir + '/dto');
    console.log('Dto created');
  } catch (error) {
    console.log('Dto Papka oldin bor edi.');
  }

  // CREATE CREATEDTO FILE
  try {
    fs.writeFileSync(
      mkDir + `/dto/create-${folderName}.dto.ts`,
      writeCreateDto(replaceName(createDtoFile)),
    );
    console.log('CreateDto created');
  } catch (error) {
    console.log('CreateDto Yozishda xatolik');
  }

  // CREATE UPDATEDTO FILE
  try {
    fs.writeFileSync(
      mkDir + `/dto/update-${folderName}.dto.ts`,
      writeUpdateDto(replaceName(updateDtoFile)),
    );
    console.log('UpdateDto created');
  } catch (error) {
    console.log('UpdateDto Yozishda xatolik');
  }
}

// ADMINS
makeFiles('admins', 'Admins', {
  username: ['string', '', '123'],
  password: ['string', '', '123'],
  token: ['string', '', ''],
});

// STUDENTS
makeFiles('students', 'Students', {
  name: ['string', '', 'Toshmat'],
  surname: ['string', '', 'Eshmatov'],
  age: ['string', '', '16'],
  phone: ['string', '', '887038006'],
  telegram_id: [
    'mongoose.Schema.Types.ObjectId',
    "{ type: mongoose.Schema.Types.ObjectId, ref:'Telegrams'  }]",
    '',
  ],
  photo: ['string', '', 'https://picsum.photos/1000/1000'],
  gender: ['boolean', '', 'true'],
  group_id: [
    'mongoose.Schema.Types.ObjectId',
    "{ type: mongoose.Schema.Types.ObjectId, ref:'Groups'  }]",
    '',
  ],
  is_active: ['boolean', '', 'true'],
  token: ['string', '', ''],
});

// ASSISTANTS
makeFiles('assistants', 'Assistants', {
  name: ['string', '', 'Toshmat'],
  surname: ['string', '', 'Eshmatov'],
  password: ['string', '', '887038006'],
  age: ['string', '', '16'],
  direction_id: [
    'mongoose.Schema.Types.ObjectId',
    "{ type: mongoose.Schema.Types.ObjectId, ref:'Directions'  }]",
    '',
  ],
  phone: ['string', '', '887038006'],
  telegram_id: [
    'mongoose.Schema.Types.ObjectId',
    "{ type: mongoose.Schema.Types.ObjectId, ref:'Telegrams'  }]",
    '',
  ],
  photo: ['string', '', 'https://picsum.photos/1000/1000'],
  gender: ['boolean', '', 'true'],
  is_active: ['boolean', '', 'true'],
  token: ['string', '', ''],
});

// GROUPS
makeFiles('groups', 'Groups', {
  direction_id: [
    'mongoose.Schema.Types.ObjectId',
    "{ type: mongoose.Schema.Types.ObjectId, ref:'Directions'  }]",
    '',
  ],
  group_number: ['string', '', 'N7'],
  teacher: ['string', '', 'Scott'],
  assistant_id: [
    'mongoose.Schema.Types.ObjectId',
    "{ type: mongoose.Schema.Types.ObjectId, ref:'Assistants'  }]",
    '',
  ],
  day: ['varchar', '', 'Dushanba,Chorshanba,Juma'],
  time: ['string', '', '14:00'],
  start_date: ['string', '', 'Sunday, June 25, 2023'],
  photo: [
    'string',
    '',
    'https://marketing.uz/uz/uploads/works/covers/c6c1569b46e710f6ffefdfb5d8f046d7.jpg',
  ],
  room_id: [
    'mongoose.Schema.Types.ObjectId',
    "{ type: mongoose.Schema.Types.ObjectId, ref:'Rooms'  }]",
    '',
  ],
  is_active: ['boolean', '', 'true'],
});

// ROOMS
makeFiles('rooms', 'Rooms', {
  name: ['string', '', 'Google'],
  route: ['string', '', '2-qavat'],
});

// TASKS
makeFiles('tasks', 'Tasks', {
  title: ['string', '', 'Projectni tugatish'],
  description: ['string', '', 'Projectni tugatishingiz kerak'],
  start_time: ['string', '', '2023.06.25'],
  deadline: ['string', '', '2023.07.02'],
});

// TELEGRAMS
makeFiles('telegrams', 'Telegrams', {
  title: ['string', '', 'Projectni tugatish'],
  description: ['string', '', 'Projectni tugatishingiz kerak'],
  start_time: ['string', '', '2023.06.25'],
  deadline: ['string', '', '2023.07.02'],
});

// DIRECTIONS
makeFiles('directions', 'Directions', {
  name: ['string', '', 'Projectni tugatish'],
  is_active: ['boolean', '', 'true'],
});

// RATINGS
makeFiles('ratings', 'Ratings', {
  mark: ['string', '', '80'],
  assistant_id: [
    'mongoose.Schema.Types.ObjectId',
    "{ type: mongoose.Schema.Types.ObjectId, ref:'Assistants'  }]",
    '',
  ],
  student_id: [
    'mongoose.Schema.Types.ObjectId',
    "{ type: mongoose.Schema.Types.ObjectId, ref:'Students'  }]",
    '',
  ],
  task_id: [
    'mongoose.Schema.Types.ObjectId',
    "{ type: mongoose.Schema.Types.ObjectId, ref:'Tasks'  }]",
    '',
  ],
  description: ['string', '', 'Bugun yaxshi tayyorlanibdi'],
  date: ['string', '', '2023.01.04'],
});
