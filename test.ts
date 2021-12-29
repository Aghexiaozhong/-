/*
 * Time: 2021/12/27
 * Author: wb_zhongjian
 * About: 请填写描述信息
 */

const input1: InputNode[] = [
  {
    shape: 'edge',
    id: '967f34a2-190f-4fd1-ad97-c066e146afe9',
    source: {
      cell: '39276f66-4032-46e1-b948-adc6f0a0a29c',
      port: 'c04aca69-3225-4d85-a8b4-c2e562a5dab0'
    },
    target: {
      cell: '1ae338ef-7b1f-4f03-82ac-c9e16e5d457a',
      port: '3413fa29-4243-4569-a959-02ffbe17396e'
    },
    parentId: 'root'
  },
  {
    shape: 'edge',
    id: '88923fea-a685-460f-91b9-86bfce3c36a5',
    source: {
      cell: '1ae338ef-7b1f-4f03-82ac-c9e16e5d457a',
      port: '831d3fe7-a6e1-4ff4-82af-a04c2404d3f1'
    },
    target: {
      cell: 'feba0c09-b8fa-4b7b-bcb4-9977f32f21c7',
      port: '863739b5-9cc9-41fc-9bfe-2c0dc8ca7c3a'
    },
    parentId: 'root',
    labels: ['通过']
  },
  {
    shape: 'edge',
    id: '7a33172c-49c4-4cbf-8ec6-367a901c3f3d',
    source: {
      cell: '1ae338ef-7b1f-4f03-82ac-c9e16e5d457a',
      port: '3329f942-ba60-4eb2-a1e7-3a2a901076e1'
    },
    target: {
      cell: 'c6f0ee2c-d235-430a-b9ea-30dbed292793',
      port: '1cbd25eb-5aa8-48a9-b1c9-7bb72af99d19'
    },
    parentId: 'root',
    labels: ['驳回']
  },
  {
    shape: 'edge',
    id: '2df27c28-df23-4d6a-bc85-2e3b0c95e777',
    source: {
      cell: 'feba0c09-b8fa-4b7b-bcb4-9977f32f21c7',
      port: 'b0f35cbb-9728-48de-aedc-331d107285dc'
    },
    target: {
      cell: 'e3adbc76-0976-455c-a92d-91de08c636ab',
      port: 'f492cf41-c12a-4001-80f6-453878451e00'
    },
    parentId: 'root',
    labels: ['通过']
  },
  {
    shape: 'edge',
    id: '08916b93-2c2f-4097-87a9-8cb9ee458570',
    source: {
      cell: 'feba0c09-b8fa-4b7b-bcb4-9977f32f21c7',
      port: '5a003aa2-366a-4ecd-a3fe-3a4738510059'
    },
    target: {
      cell: 'e3adbc76-0976-455c-a92d-91de08c636ab',
      port: 'f492cf41-c12a-4001-80f6-453878451e00'
    },
    parentId: 'root',
    labels: ['驳回']
  },
  {
    shape: 'circle',
    id: '39276f66-4032-46e1-b948-adc6f0a0a29c',
    parentId: 'root',
    item: {
      id: 'compositeStart',
      name: 'start',
      shape: 'circle'
    }
  },
  {
    shape: 'react-shape',
    id: '1ae338ef-7b1f-4f03-82ac-c9e16e5d457a',
    parentId: 'root',
    item: {
      id: 290,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: '武晓旭测试',
      nodeCode: 'def_1634041507',
      remark: '',
      cname: 'wuxiaoxu06',
      ctime: 1634041507000
    },
    component: 'node-component'
  },
  {
    shape: 'react-shape',
    id: '92248642-dd81-465b-b74b-abedfca7c0d3',
    parentId: 'root',
    item: {
      id: 293,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: '测试一下1013',
      nodeCode: 'def_1634110410',
      remark: '',
      cname: 'linwei15',
      ctime: 1634110410000
    },
    component: 'node-component'
  },
  {
    shape: 'edge',
    id: 'a6f8ff34-b585-4708-ad94-c6371252ca0b',
    source: {
      cell: '1ae338ef-7b1f-4f03-82ac-c9e16e5d457a',
      port: '69b17972-bbd5-457b-83d0-bf82076abd2c'
    },
    target: {
      cell: '92248642-dd81-465b-b74b-abedfca7c0d3',
      port: 'b39004f0-9151-4255-a20b-1f5978bddf1f'
    },
    parentId: 'root',
    labels: ['疑似']
  },
  {
    shape: 'react-shape',
    id: 'feba0c09-b8fa-4b7b-bcb4-9977f32f21c7',
    parentId: 'root',
    item: {
      id: 296,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: 'rrrrrrxxxxx',
      nodeCode: 'def_1639118263',
      remark: 'test333',
      cname: 'wb_zhongjian',
      ctime: 1639118263000
    },
    component: 'node-component'
  },
  {
    shape: 'react-shape',
    id: 'c6f0ee2c-d235-430a-b9ea-30dbed292793',
    parentId: 'root',
    item: {
      id: 294,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 2,
      auditSystem: '通用人审',
      name: 'aaaaaa',
      nodeCode: 'def_1639117589',
      remark: 'test',
      cname: 'wb_zhongjian',
      ctime: 1639117589000
    },
    component: 'node-component'
  },
  {
    shape: 'react-shape',
    id: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    parentId: 'root',
    data: {
      parent: true
    },
    item: {
      id: 'composite-1node2-composite',
      name: '复合节点',
      shape: 'rect'
    },
    component: 'composite-component'
  },
  {
    shape: 'circle',
    id: 'fb7aea99-641d-48ca-917a-3119e2596ade',
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    data: {
      isParentStart: true
    },
    item: {
      id: 'compositeStart',
      name: 'start',
      shape: 'circle'
    }
  },
  {
    shape: 'react-shape',
    id: '686dba61-0c91-4f4c-a671-214c360ed9cd',
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    data: {
      isParentStart: true
    },
    item: {
      id: 293,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: '测试一下1013',
      nodeCode: 'def_1634110410',
      remark: '',
      cname: 'linwei15',
      ctime: 1634110410000
    },
    component: 'node-component'
  },
  {
    shape: 'react-shape',
    id: '3ed8e03c-8b61-4b07-9339-82841364bddb',
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    data: {
      parent: true,
      isParentStart: true
    },
    item: {
      id: 'composite-1node2-composite',
      name: '复合节点',
      shape: 'rect'
    },
    component: 'composite-component'
  },
  {
    shape: 'circle',
    id: '70747bd4-df22-4165-8572-f295883ea3ae',
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    data: {
      isParentStart: true
    },
    item: {
      id: 'compositeStart',
      name: 'start',
      shape: 'circle'
    }
  },
  {
    shape: 'react-shape',
    id: '76cc39bf-e699-4f5e-95a3-464ab1abb80b',
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    data: {
      isParentStart: true
    },
    item: {
      id: 275,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: '通用机审1009_1',
      nodeCode: 'def_1633745843',
      remark: '',
      cname: 'linwei15',
      ctime: 1633745843000
    },
    component: 'node-component'
  },
  {
    shape: 'react-shape',
    id: 'ba1cc7b6-b8fd-46e5-8478-edb18ed11cc2',
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    data: {
      isParentStart: true
    },
    item: {
      id: 277,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: '通用机审1009_3',
      nodeCode: 'def_1633763741',
      remark: '',
      cname: 'linwei15',
      ctime: 1633763741000
    },
    component: 'node-component'
  },
  {
    shape: 'react-shape',
    id: 'ca472e63-87b9-4f53-81f5-789a674ef16d',
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    data: {
      isParentStart: true
    },
    item: {
      id: 255,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 3,
      auditSystem: '外部审核系统',
      name: '闪购安全审核。。。。。。。。。。。',
      nodeCode: 'def_1632834873',
      remark: '',
      cname: 'wuxiaoxu06',
      ctime: 1632733342000
    },
    component: 'node-component'
  },
  {
    shape: 'react-shape',
    id: '97948f30-1c77-4b15-af8e-9ed1649df2f9',
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    data: {
      isParentStart: true
    },
    item: {
      id: 232,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: '2344',
      nodeCode: 'def_1632834723',
      remark: '',
      cname: 'wanghao76',
      ctime: 1632567180000
    },
    component: 'node-component'
  },
  {
    shape: 'edge',
    id: '17d334ed-e4c5-4171-af6d-dc5606dc8580',
    source: {
      cell: 'fb7aea99-641d-48ca-917a-3119e2596ade',
      port: 'a3218677-6f4c-4cbe-93ce-c87719bd9c63'
    },
    target: {
      cell: '686dba61-0c91-4f4c-a671-214c360ed9cd',
      port: '5aaf8ef6-c38f-4530-8a35-ad9d658c447f'
    },
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab'
  },
  {
    shape: 'circle',
    id: '1498a7ee-3b27-42f0-9d86-f6fc0e229888',
    parentId: '3ed8e03c-8b61-4b07-9339-82841364bddb',
    data: {
      isParentStart: true
    },
    item: {
      id: 'compositeStart',
      name: 'start',
      shape: 'circle'
    }
  },
  {
    shape: 'react-shape',
    id: 'de987597-6524-42e4-b012-21e24e427bcb',
    parentId: '3ed8e03c-8b61-4b07-9339-82841364bddb',
    data: {
      isParentStart: true
    },
    item: {
      id: 294,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 2,
      auditSystem: '通用人审',
      name: 'aaaaaa',
      nodeCode: 'def_1639117589',
      remark: 'test',
      cname: 'wb_zhongjian',
      ctime: 1639117589000
    },
    component: 'node-component'
  },
  {
    shape: 'edge',
    id: 'c20927ee-3c48-4294-bc0a-c3d2e658d793',
    source: {
      cell: '1498a7ee-3b27-42f0-9d86-f6fc0e229888',
      port: '566debc7-b23b-42f4-a54f-7b1c86170beb'
    },
    target: {
      cell: 'de987597-6524-42e4-b012-21e24e427bcb',
      port: '4812a2c0-35e2-40bc-a565-5dbe4caaf41e'
    },
    parentId: '3ed8e03c-8b61-4b07-9339-82841364bddb'
  },
  {
    shape: 'edge',
    id: 'f849b1c7-d107-4efe-9015-5fc9e4d153b3',
    source: {
      cell: '70747bd4-df22-4165-8572-f295883ea3ae',
      port: '2c8d89ce-c88e-4b5c-b7b9-54b411fc3354'
    },
    target: {
      cell: '76cc39bf-e699-4f5e-95a3-464ab1abb80b',
      port: '5b906975-6136-42d9-ad03-463d70c26c21'
    },
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab'
  },
  {
    shape: 'edge',
    id: 'e5d769ad-a62f-4ae1-af3f-471e6465f539',
    source: {
      cell: '76cc39bf-e699-4f5e-95a3-464ab1abb80b',
      port: 'de4e7ebc-3ac9-40ed-a9cc-1b2cd510e005'
    },
    target: {
      cell: 'ba1cc7b6-b8fd-46e5-8478-edb18ed11cc2',
      port: '24330d7a-e124-45a3-a29a-02e847c2dad0'
    },
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    labels: ['驳回']
  },
  {
    shape: 'edge',
    id: '0f811f1a-bf7f-44a9-917a-7eba8b786825',
    source: {
      cell: 'ba1cc7b6-b8fd-46e5-8478-edb18ed11cc2',
      port: 'e903a623-473b-4273-a455-c3ae6878b359'
    },
    target: {
      cell: 'ca472e63-87b9-4f53-81f5-789a674ef16d',
      port: '1e9e7588-f2f0-443b-a9d1-1a406c1c266a'
    },
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    labels: ['通过']
  },
  {
    shape: 'edge',
    id: 'e83968ab-5341-48c7-8ede-1863c0c19c62',
    source: {
      cell: 'ba1cc7b6-b8fd-46e5-8478-edb18ed11cc2',
      port: '7963c5d2-415f-4e24-adac-47b9140ce61b'
    },
    target: {
      cell: '97948f30-1c77-4b15-af8e-9ed1649df2f9',
      port: '6b20ced5-33b3-4370-a326-fdd55a3dd080'
    },
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    labels: ['驳回']
  },
  {
    shape: 'edge',
    id: '6213d76a-680d-4773-a33d-5c0c28add371',
    source: {
      cell: '76cc39bf-e699-4f5e-95a3-464ab1abb80b',
      port: 'edd8993d-1e36-4b9a-ab9d-442e7ad50aa1'
    },
    target: {
      cell: '3ed8e03c-8b61-4b07-9339-82841364bddb',
      port: '5f215274-fa5c-48c5-96eb-8b6c252283c0'
    },
    parentId: 'e3adbc76-0976-455c-a92d-91de08c636ab',
    labels: ['通过']
  }
]
​
const input2: InputNode[] = [
  {
    shape: 'edge',
    id: '61810e1d-0aab-469d-90a2-e4106c44a46e',
    source: {
      cell: '8a710f05-1262-4112-a9a1-07fc197fa992',
      port: 'a3f64a40-6463-42f3-ada0-2bdb10f5e39c'
    },
    target: {
      cell: '9fe5ccd6-52e3-4037-8e7a-5b1621483d2e',
      port: '420f8ff9-21a5-4e47-b1a3-ded3a4cce0db'
    },
    parentId: 'root',
    labels: ['通过']
  },
  {
    shape: 'edge',
    id: '3ef48ac6-9d57-47b1-9896-0bdbb713bd97',
    source: {
      cell: '8a710f05-1262-4112-a9a1-07fc197fa992',
      port: 'e346f4b4-e562-4acf-b626-836b9da9a456'
    },
    target: {
      cell: '9fe5ccd6-52e3-4037-8e7a-5b1621483d2e',
      port: '420f8ff9-21a5-4e47-b1a3-ded3a4cce0db'
    },
    parentId: 'root',
    labels: ['驳回']
  },
  {
    shape: 'edge',
    id: '39c4dce4-9589-437c-9bf5-7a5d2115415f',
    source: {
      cell: 'e0fa2046-5a6c-4683-b659-f3ff4440ad9f',
      port: 'be7f0a8a-3734-4cad-957a-3e3613b98112'
    },
    target: {
      cell: 'd6a23c18-d808-4649-8c86-bf8becc67c3d',
      port: '0384e720-1832-4d3f-a1bc-a94dca106d64'
    },
    parentId: 'root'
  },
  {
    shape: 'edge',
    id: '3c42ce03-7228-4d83-a224-35532fd11ced',
    source: {
      cell: 'd6a23c18-d808-4649-8c86-bf8becc67c3d',
      port: 'c07c00ba-68a5-49c1-9582-0a12a7a3e93d'
    },
    target: {
      cell: '8a710f05-1262-4112-a9a1-07fc197fa992',
      port: 'a1d134a4-df73-44af-815a-c21dea853af9'
    },
    parentId: 'root',
    labels: ['疑似']
  },
  {
    shape: 'edge',
    id: '97197fe6-1faf-413e-8a25-5583b4a5ee03',
    source: {
      cell: 'd6a23c18-d808-4649-8c86-bf8becc67c3d',
      port: '299a9d4a-8950-4a94-87e9-d473c857d32a'
    },
    target: {
      cell: 'dd0822e3-a7b5-4844-accf-518a2d95257f',
      port: '2e8f234f-b440-44b9-a457-8f6c5dc457b3'
    },
    parentId: 'root',
    labels: ['驳回']
  },
  {
    shape: 'circle',
    id: 'e0fa2046-5a6c-4683-b659-f3ff4440ad9f',
    parentId: 'root',
    item: {
      id: 'compositeStart',
      name: 'start',
      shape: 'circle'
    }
  },
  {
    shape: 'rect',
    id: '8a710f05-1262-4112-a9a1-07fc197fa992',
    parentId: 'root',
    item: {
      id: 296,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: 'rrrrrrxxxxx',
      nodeCode: 'def_1639118263',
      remark: 'test333',
      cname: 'wb_zhongjian',
      ctime: 1639118263000
    }
  },
  {
    shape: 'react-shape',
    id: '9fe5ccd6-52e3-4037-8e7a-5b1621483d2e',
    parentId: 'root',
    data: {
      parent: true
    },
    item: {
      id: 'composite-1node2-composite',
      name: '复合节点',
      shape: 'rect'
    },
    component: 'composite-component'
  },
  {
    shape: 'rect',
    id: 'dd0822e3-a7b5-4844-accf-518a2d95257f',
    parentId: 'root',
    item: {
      id: 267,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 2,
      auditSystem: '通用人审',
      name: '这是审核类型测试',
      nodeCode: 'def_1632834993',
      remark: '审核类型测试',
      cname: 'wb_jiangzheng',
      ctime: 1632830413000
    }
  },
  {
    shape: 'react-shape',
    id: '571bf90e-3269-4c26-99e0-3c28fa0ef355',
    parentId: '9fe5ccd6-52e3-4037-8e7a-5b1621483d2e',
    data: {
      parent: true,
      isParentStart: true
    },
    item: {
      id: 'composite-1node2-composite',
      name: '复合节点',
      shape: 'rect'
    },
    component: 'composite-component'
  },
  {
    shape: 'circle',
    id: '146b7987-e242-4fd0-8dd5-ebe42a675cf1',
    parentId: '9fe5ccd6-52e3-4037-8e7a-5b1621483d2e',
    data: {
      isParentStart: true
    },
    item: {
      id: 'compositeStart',
      name: 'start',
      shape: 'circle'
    }
  },
  {
    shape: 'rect',
    id: '0f1ca228-5493-4fa2-9dc7-be5ce68a3499',
    parentId: '9fe5ccd6-52e3-4037-8e7a-5b1621483d2e',
    data: {
      isParentStart: true
    },
    item: {
      id: 269,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: '9.29测试_1',
      nodeCode: 'def_1632887486',
      remark: '',
      cname: 'linwei15',
      ctime: 1632887486000
    }
  },
  {
    shape: 'circle',
    id: '219b04ec-0e24-4e7b-934b-c3f1fbac23f7',
    parentId: '9fe5ccd6-52e3-4037-8e7a-5b1621483d2e',
    data: {
      isParentStart: true
    },
    item: {
      id: 'compositeStart',
      name: 'start',
      shape: 'circle'
    }
  },
  {
    shape: 'circle',
    id: '127b29e3-9f3b-4bc8-8aed-cbb5e6eb65c5',
    parentId: '571bf90e-3269-4c26-99e0-3c28fa0ef355',
    data: {
      isParentStart: true
    },
    item: {
      id: 'compositeStart',
      name: 'start',
      shape: 'circle'
    }
  },
  {
    shape: 'rect',
    id: '4a3acb70-9924-4238-92ad-0f8bb2ab5350',
    parentId: '571bf90e-3269-4c26-99e0-3c28fa0ef355',
    data: {
      isParentStart: true
    },
    item: {
      id: 269,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: '9.29测试_1',
      nodeCode: 'def_1632887486',
      remark: '',
      cname: 'linwei15',
      ctime: 1632887486000
    }
  },
  {
    shape: 'edge',
    id: 'da43ac33-1fa6-42e5-96c7-dead6c8dd25b',
    source: {
      cell: '127b29e3-9f3b-4bc8-8aed-cbb5e6eb65c5',
      port: 'd9132c17-017d-4735-a796-c6190dc28484'
    },
    target: {
      cell: '4a3acb70-9924-4238-92ad-0f8bb2ab5350',
      port: '33874078-fbae-40c2-b57c-5a1d3093e31b'
    },
    parentId: '571bf90e-3269-4c26-99e0-3c28fa0ef355'
  },
  {
    shape: 'edge',
    id: '6923dc4c-10bf-4efc-aaad-6d43c1d43ad7',
    source: {
      cell: '146b7987-e242-4fd0-8dd5-ebe42a675cf1',
      port: '3a3fff87-856c-4dde-941c-9a6642d4b98e'
    },
    target: {
      cell: '0f1ca228-5493-4fa2-9dc7-be5ce68a3499',
      port: '4629dc01-d931-4dea-91b5-e357fe9c57b9'
    },
    parentId: '9fe5ccd6-52e3-4037-8e7a-5b1621483d2e'
  },
  {
    shape: 'edge',
    id: 'aa8e2529-99f7-42cf-beec-4b3d8023aa67',
    source: {
      cell: '219b04ec-0e24-4e7b-934b-c3f1fbac23f7',
      port: 'bfa414f5-8578-43ae-a731-648a4cfc35f0'
    },
    target: {
      cell: '571bf90e-3269-4c26-99e0-3c28fa0ef355',
      port: '28f83e0f-2f1e-49c7-9865-9e10dbd579bb'
    },
    parentId: '9fe5ccd6-52e3-4037-8e7a-5b1621483d2e'
  },
  {
    shape: 'react-shape',
    id: 'd6a23c18-d808-4649-8c86-bf8becc67c3d',
    parentId: 'root',
    data: {
      parent: true
    },
    item: {
      id: 'composite-1node2-composite',
      name: '复合节点',
      shape: 'rect'
    },
    component: 'composite-component'
  },
  {
    shape: 'circle',
    id: 'a8b1df48-406d-47b0-9881-ab4f021b8a0c',
    parentId: 'd6a23c18-d808-4649-8c86-bf8becc67c3d',
    data: {
      isParentStart: true
    },
    item: {
      id: 'compositeStart',
      name: 'start',
      shape: 'circle'
    }
  },
  {
    shape: 'rect',
    id: 'ef707827-e504-4843-963d-dabe3d96ef5d',
    parentId: 'd6a23c18-d808-4649-8c86-bf8becc67c3d',
    data: {
      isParentStart: true
    },
    item: {
      id: 270,
      bizIdentityId: 42,
      bizIdentityName: '闪购',
      auditSystemId: 1,
      auditSystem: '通用机审',
      name: '9.29测试_2',
      nodeCode: 'def_1632894748',
      remark: '2',
      cname: 'linwei15',
      ctime: 1632894748000
    }
  },
  {
    shape: 'edge',
    id: '9c106116-6835-495f-b7c0-1d5d0d2d86fa',
    source: {
      cell: 'a8b1df48-406d-47b0-9881-ab4f021b8a0c',
      port: '88d82c9c-7e89-43ef-abd6-b5210870def9'
    },
    target: {
      cell: 'ef707827-e504-4843-963d-dabe3d96ef5d',
      port: '2bd1bfd8-82d4-4351-907f-7443d7e20c99'
    },
    parentId: 'd6a23c18-d808-4649-8c86-bf8becc67c3d'
  }
]
​
const output = {
  bizId: 'waimai',
  root: {
    nodeCode: 'A',
    nextNode: {
      pass: {
        auditSystem: 'manual',
        nodeCode: 'B',
        nextNode: null
      },
      hit: {
        specificType: 'circle',
        decisitionRule: 'onePass',
        nextNode: null,
        processes: [
          {
            bizId: 'waimai',
            root: {
              auditSystem: 'manual',
              nodeCode: 'B',
              nextNode: null
            }
          },
          {
            bizId: 'waimai',
            root: {
              auditSystem: 'manual',
              nodeCode: 'A2',
              nextNode: {
                pass: {
                  auditSystem: 'mechine',
                  nodeCode: 'A3',
                  nextNode: null
                },
                hit: null,
                suspect: null
              }
            }
          }
        ]
      },
      suspect: {
        specificType: 'circle',
        decisitionRule: 'onePass',
        nextNode: null,
        processes: [
          {
            bizId: 'waimai',
            root: {
              auditSystem: 'manual',
              nodeCode: 'B',
              nextNode: null
            }
          },
          {
            bizId: 'waimai',
            root: {
              auditSystem: 'manual',
              nodeCode: 'A2',
              nextNode: {
                pass: {
                  auditSystem: 'mechine',
                  nodeCode: 'A3',
                  nextNode: null
                },
                hit: null,
                suspect: null
              }
            }
          }
        ]
      }
    }
  }
}
​
interface NextTreeNode {
  pass?: TreeNode
  hit?: TreeNode
  suspect?: TreeNode
}
type Flow = 'pass' | 'hit' | 'suspect' | undefined
interface TreeNode {
  flow?: Flow
  name?: string
  nodeCode?: string
  type: 1 | 2 // 1 普通节点，2 表示复合节点
  nextNode?: NextTreeNode
  processes?: TreeNode[]
  // TODO wb_zhongjian 补充提交给后端的字段
}
​
interface SourceTarget {
  cell: string
  port: string
}
interface EdgeNode {
  shape: 'edge'
  id: string
  source: SourceTarget
  target: SourceTarget
  parentId: string
  labels?: string[]
}
​
interface NodeData {
  isParentStart?: boolean
  parent?: boolean
  [key: string]: any // 传给后端的参数
}
​
interface CircleNodeItem {
  id: 'compositeStart'
  name: 'start'
  shape: 'circle'
}
interface CircleNode {
  shape: 'circle'
  id: string
  parentId: string
  item: CircleNodeItem
  data?: NodeData
}
// 禁用、普通节点数据
interface BizItem {
  id: number
  bizIdentityId: number
  bizIdentityName: string
  auditSystemId: number
  auditSystem: string
  name: string
  nodeCode: string
  remark: string
  cname: string
  ctime: number
}
// 无权限，禁用
interface RectNode {
  shape: 'rect'
  id: string
  parentId: string
  item: BizItem
  data?: NodeData
  component?: string
}
// 复合节点数据
interface CompositeNodeItem {
  id: 'composite-1node2-composite'
  name: '复合节点'
  shape: 'rect'
  [key: string]: any
}
// 普通节点或复合节点
interface ReactShapeNode {
  shape: 'react-shape'
  id: string
  parentId: string
  data?: NodeData
  component: 'node-component' | 'composite-component'
  item: BizItem | CompositeNodeItem
}
​
type InputNode = EdgeNode | CircleNode | RectNode | ReactShapeNode
​
/**
 * 获取当前层级信息
 * @param inputNodeArr 输入节点列表
 * @param parentId 当前层级父ID
 */
const getLevelInfo = (inputNodeArr: InputNode[], parentId: string) => {
  const currentLevelNodeList: InputNode[] = []
  const remainingLevelNodeList: InputNode[] = []
  const startCircleIdList: string[] = []
  inputNodeArr.forEach(node => {
    if (node.parentId === parentId) {
      currentLevelNodeList.push(node)
    } else {
      remainingLevelNodeList.push(node)
    }
    if (node.shape === 'circle' && node.parentId === parentId) {
      startCircleIdList.push(node.id)
    }
  })
  return [
    startCircleIdList,
    currentLevelNodeList,
    remainingLevelNodeList
  ] as const
}
​
/**
 * 根据 EdgeNode 的 sourceId 查找 EdgeNode 列表
 * @param sourceId EdgeNode 的 sourceId
 * @param currentLevelNodeList 当前层级节点列表
 */
const findEdgeNodeList = (
  sourceId: string,
  currentLevelNodeList: InputNode[]
) => {
  return currentLevelNodeList
    .filter(item => item.shape === 'edge' && item.source.cell === sourceId)
    .map(item => item as EdgeNode)
}
/**
 * 根据 EdgeNode 查找 target 节点
 * @param edgeNode EdgeNod
 * @param currentLevelNodeList 当前层级节点列表
 */
const findNodeByEdgeNode = (
  edgeNode: EdgeNode,
  currentLevelNodeList: InputNode[]
) => {
  // 查找 InputNode
  const inputNode = currentLevelNodeList.find(
    item =>
      item.id === edgeNode.target.cell &&
      (item.shape === 'rect' || item.shape === 'react-shape')
  ) as RectNode | ReactShapeNode
  if (!inputNode) {
    return
  }
​
  // 设置流类型
  const label = edgeNode.labels && edgeNode.labels[0]
  let flow: Flow = undefined
  switch (label) {
    case '通过':
      flow = 'pass'
      break
    case '疑似':
      flow = 'suspect'
      break
    case '驳回':
      flow = 'hit'
      break
  }
  // 组装结果节点
  const result: TreeNode = {
    // TODO wb_zhongjian 补充提交给后端的字段
    nodeCode: inputNode.item?.nodeCode,
    flow: flow,
    name: inputNode.item?.name,
    type: inputNode.component === 'composite-component' ? 2 : 1 // 1 普通节点，2 表示复合节点
  }
  return result
}
​
/**
 * 获取非根节点列表
 * @param startIdList edge开始源id列表
 * @param currentLevelNodeList 当前层级节点列表
 * @param remainingLevelNodeList 剩余层架节点列表，用于处理复合几点时不再遍历所有节点
 */
const getNotRootTreeNode = (
  startIdList: string[],
  currentLevelNodeList: InputNode[],
  remainingLevelNodeList: InputNode[]
): TreeNode[] | undefined => {
  const resultList: TreeNode[] = []
  startIdList.forEach(startId => {
    const edgeNodeList = findEdgeNodeList(startId, currentLevelNodeList)
    if (!edgeNodeList || edgeNodeList.length === 0) {
      return
    }
    edgeNodeList.forEach(edgeNode => {
      const treeNode = findNodeByEdgeNode(edgeNode, currentLevelNodeList)
      if (!treeNode) {
        return
      }
      // 只要存在就添加到结果列表中
      resultList.push(treeNode)
​
      const targetId = edgeNode.target.cell
      if (treeNode.type === 2) {
        // 如果复合节点，则获取子流程
        treeNode.processes = getRootTreeNode(remainingLevelNodeList, targetId)
      }
​
      // 继续获取后续的流程
      const nextNodeList = getNotRootTreeNode(
        [targetId],
        currentLevelNodeList,
        remainingLevelNodeList
      )
      if (!nextNodeList || nextNodeList.length === 0) {
        return
      }
​
      const nextNode: NextTreeNode = {}
      nextNodeList.forEach(item => {
        if(item.flow) {
          nextNode[item.flow] = item
        }
        delete item.flow
        // 提交代码前，添加下面这行代码删除调试信息
        // delete item.name
      })
      treeNode.nextNode = nextNode
    })
  })
  return resultList
}
​
/**
 * 获取每一层的根节点列表
 * @param inputNodeArr 剩余的所有节点数组
 * @param parentId 流程父 ID
 */
const getRootTreeNode = (
  inputNodeArr: InputNode[],
  parentId: string
): TreeNode[] | undefined => {
  if (
    !inputNodeArr ||
    inputNodeArr.length === 0 ||
    !parentId ||
    parentId.length === 0
  ) {
    return
  }
​
  const [startCircleIdList, currentLevelNodeList, remainingLevelNodeList] =
    getLevelInfo(inputNodeArr, parentId)
  if (
    !startCircleIdList ||
    !currentLevelNodeList ||
    currentLevelNodeList.length === 0
  ) {
    return
  }
​
  // 拿到每一层的根节点后，就可以根据起始节点获取非根节点列表了
  return getNotRootTreeNode(
    startCircleIdList,
    currentLevelNodeList,
    remainingLevelNodeList
  )
}
​
const treeNode1 = getRootTreeNode(input1, 'root')
if (treeNode1 && treeNode1.length > 0) {
  console.log('结果1', JSON.stringify(treeNode1[0]))
} else {
  console.log('没有结果1')
}
​
const treeNode2 = getRootTreeNode(input2, 'root')
if (treeNode2 && treeNode2.length > 0) {
  console.log('结果2', JSON.stringify(treeNode2[0]))
} else {
  console.log('没有结果2')
}
​