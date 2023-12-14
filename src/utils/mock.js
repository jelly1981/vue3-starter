import Mock from 'mockjs'

Mock.mock('/login', 'post', {
    status: 1, 
    token: +new Date()
})

Mock.mock('/signout', 'post', {
    status: 1
})

Mock.mock('/getUserList', 'get', {
    status: 1, 
    list: [{
        userName: "Micheal Chen",
        gender: 1,
        age: 18,
        id: 1
    }, {
        userName: "Yuki",
        gender: 2,
        age: 21,
        id: 2
    }, {
        userName: "Umi",
        gender: 2,
        age: 19,
        id: 3
    }, {
        userName: "Lynn",
        gender: 2,
        age: 20,
        id: 4
    }, {
        userName: "Jack",
        gender: 1,
        age: 23,
        id: 5
    }, {
        userName: "Mark",
        gender: 1,
        age: 21,
        id: 6
    }, {
        userName: "Cruse",
        gender: 1,
        age: 19,
        id: 7
    }, {
        userName: "Kimi",
        gender: 2,
        age: 21,
        id: 8
    }]
})