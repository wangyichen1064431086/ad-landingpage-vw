import cascade from "@ftchinese/cascade";

const rawData = [
  {"province":"安徽","city":"蚌埠","shop":"蚌埠星辉汽车销售服务有限公司"},
  {"province":"安徽","city":"阜阳","shop":"阜阳伟久汽车销售服务有限公司"},
  {"province":"安徽","city":"合肥","shop":"安徽之星汽车销售服务有限公司"},
  {"province":"安徽","city":"合肥","shop":"合肥利之星汽车服务有限公司"},
  {"province":"安徽","city":"马鞍山","shop":"马鞍山之星汽车销售服务有限公司"},
  {"province":"安徽","city":"铜陵","shop":"铜陵利星汽车销售服务有限公司"},
  {"province":"安徽","city":"芜湖","shop":"芜湖中星汽车销售服务有限公司北京中路分公司"},
  {"province":"江苏","city":"苏州","shop":"常熟中升之星汽车销售服务有限公司"},
  {"province":"江苏","city":"常州","shop":"常州之星汽车有限公司"},
  {"province":"江苏","city":"常州","shop":"常州外汽星豪汽车销售服务有限公司"},
  {"province":"江苏","city":"常州","shop":"常州万帮汽车销售服务有限公司"},
  {"province":"江苏","city":"淮安","shop":"淮安之星汽车销售服务有限公司"},
  {"province":"江苏","city":"淮安","shop":"淮安之星汽车销售服务有限公司清河新区分公司"},
  {"province":"江苏","city":"无锡","shop":"江阴利之星汽车维修服务有限公司"},
  {"province":"江苏","city":"泰州","shop":"泰州之星汽车销售服务有限公司靖江分公司"},
  {"province":"江苏","city":"苏州","shop":"昆山利星汽车服务有限公司"},
  {"province":"江苏","city":"连云港","shop":"连云港之星汽车销售有限公司"},
  {"province":"江苏","city":"南京","shop":"江苏中驰汽车销售服务有限公司"},
  {"province":"江苏","city":"南京","shop":"南京利之星汽车销售服务有限公司"},
  {"province":"江苏","city":"南京","shop":"南京利之星汽车销售服务有限公司红山路分公司"},
  {"province":"江苏","city":"南京","shop":"南京宁星汽车维修服务有限公司"},
  {"province":"江苏","city":"南京","shop":"南京中升之星汽车销售服务有限公司"},
  {"province":"江苏","city":"南京","shop":"南京中升之星汽车销售服务有限公司建邺分公司"}
];

const dealedData = cascade.dealData(rawData);

const mySelectElems = ["province","city","shop"];
const myCascade = new cascade.Cascade(dealedData, mySelectElems);



