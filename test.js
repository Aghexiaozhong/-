/*
 * Time: 2021/12/29
 * Author: wb_zhongjian
 * About: js递归处理后端要的数据
 */
const inputData = [
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
// 思路 ：  最开始的inputdata是一个一维数组（里面还有边，节点等数据），要转换为后端要的树
// 1， 传入inputdata 数组和 根节点id （‘root’），循环出当前层级的数据（currentLevelNodeList），剩余的数据（remainingLevelNodeList，复合节点内的数据，做下一次循环时使用），startCircleIdList（一个主流程的start的id数组，因为
//  复合节点内可能有多个流程，所以设置为数组，然后针对getCurrentLevelInfo返回的数据循环，拿到每个start节点后面的连线，然后循环，根据每条线再找到nextnode ，最后拼装到一起再返回）
const getCurrentLevelInfo = (inputData, startId) => {
  const currentInfo = {
    startIdList:[],
    currentNodeList:[],
    remainingLevelNodeList:[]
  }
  inputData.forEach((node) => {
    if (node.parentId === startId){
      currentInfo.currentNodeList.push(node)
    }else{
      currentInfo.remainingLevelNodeList.push(node)
    }
    if (node.shape === 'circle' && node.parentId === startId){
      currentInfo.startIdList.push(node.id)
    }
  })
  return currentInfo
}

const findEdgeByNode = (startNodeId, currentNodeList) => {
  let edgeList = []
  currentNodeList.forEach(currentNode => {
    if(currentNode.shape === 'edge' && currentNode.source.cell == startNodeId){
      edgeList.push(currentNode)
    }
  })
  return edgeList
}

const findNodeByEdge = (edgeItem, currentNodeList) => {
  const obj = currentNodeList.find(currentNode => edgeItem.target.cell === currentNode.id)
  const targetObj = {
    name: obj.item.name,
    nodeCode: obj.item.nodeCode,
    component:obj.component,
    id: obj.id
  }
  return targetObj
}

const getNotRootNode = (currentInfo) => {
  // 根据start节点找到他的连线，然后根据连线找到他的下级节点
  const resultList = []
  currentInfo.startIdList.forEach((startNodeId) => {
    const edgeNodeList = findEdgeByNode(startNodeId, currentInfo.currentNodeList)
    if (!edgeNodeList.length){
      return
    }
    edgeNodeList.forEach(edgeItem => {
      // 通过连线找到他连接的节点，对应的是target的cell并且只能有一个
      const inputNode = findNodeByEdge(edgeItem, currentInfo.currentNodeList)
      if (!inputNode){
        return
      }
      // 根据edgeItem  边的labels 得出是 pass 、suspect 还是 hit
      let flow = null;
      const labels = edgeItem.labels &&  edgeItem.labels[0]
      switch (labels){
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
      inputNode.flow = flow
      if(inputNode.component === 'composite-component'){
        inputNode.type = 2
      }else{
        inputNode.type = 1
      }
      inputNode.nextNode = null
      // resultList.push(inputNode)
      const startId = inputNode.id
      if (inputNode.type === 2){
        // 复合节点 则再调用查询 getRootNode  找到它的子流程
        inputNode.processes = getRootNode(currentInfo.remainingLevelNodeList, startId)
      }
      delete inputNode.id
      // delete inputNode.name
      delete inputNode.component
      resultList.push(inputNode)

      //  find 找dao的的节点的后续流程
      const nextNode = {}
      const currentInfoCopy = {
        startIdList:[startId],
        currentNodeList:currentInfo.currentNodeList,
        remainingLevelNodeList:currentInfo.remainingLevelNodeList
      }
      const nextNodeList = getNotRootNode(currentInfoCopy)
      if (!nextNodeList.length) {
        return
      }
      nextNodeList.forEach(nextNodeItem => {
        if (nextNodeItem.flow){
          // 删除之前加的测试数据
          delete nextNodeItem.id
          // delete nextNodeItem.name
          delete nextNodeItem.component
          nextNode[nextNodeItem.flow] = nextNodeItem
        }   
        delete nextNodeItem.flow      
      })
      
      inputNode.nextNode = nextNode
    })
  })
  return resultList
}

const getRootNode = (inputData, startId) => {
  if (!inputData || !inputData.length || !startId || !startId.length) {
    return
  }
  const currentInfo = getCurrentLevelInfo(inputData, startId)
  if (!currentInfo.currentNodeList.length || !currentInfo.startIdList.length){
    return
  }
  return getNotRootNode(currentInfo)
}

let result = getRootNode(inputData, 'root')
console.log(JSON.stringify(result), 'result')
