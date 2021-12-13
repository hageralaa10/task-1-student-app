const yargs = require('yargs');

const student = require('./student');

// Add

// node app.js add --id="1" --name="hager" --grades 50 40 60 --comment="v.good"

yargs.command({
    command: 'add',
    describe: 'Add student',
    builder: {
        id: {
            describe: 'adding student id ',
            demandOption: true,
            type: 'number',
        },
        name: {
            describe: 'adding student name ',
            demandOption: true,
            type: 'string',
        },
        grades: {
            describe: 'adding student grade',
            demandOption: true,
            type: 'array'
        },
        comment: {
            describe: 'add comments describe student state',
            // demandOption: true,
            type: 'string'
        },
        total: {
            describe: 'total number of students grades',
            type: 'number'
        }
    },
    handler: (argv) => {
        let sum = 0;
        argv.grades.forEach(grade => sum += grade)
        student.addStudent(argv.id, argv.name, argv.grades, argv.comment, sum)
    }
})

// Read with id
yargs.command({
    command: 'read',
    describe: 'read student using ID',
    builder: {
        id: {
            describe: 'student want to display information',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        student.readStudent(argv.id)
    }
})


// Delete
yargs.command({
    command: 'delete',
    describe: 'read all student',
    builder: {
        id: {
            describe: 'delete students using id',
            demandOption: true,
            type: 'number'
        },
    },
    handler: (argv) => {
        student.removeStudent(argv.id)
    }
})

// List
yargs.command({
    command: 'list',
    describe: 'read all student',
    handler: () => {
        student.listStudent()
    }
})

// console.log(yargs.argv)
yargs.parse()
