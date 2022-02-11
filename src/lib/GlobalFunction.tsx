export type RulesProp = {
  [key: string]: RulesOptionProp;
};

interface RulesDetailProp {
  message: string;
  value?: any;
}

interface RulesOptionProp {
  required?: RulesDetailProp;
  email?: RulesDetailProp;
  minLength?: RulesDetailProp;
  maxLength?: RulesDetailProp;
  equal?: RulesDetailProp;
  notEqual?: RulesDetailProp;
  greater?: RulesDetailProp;
  lesser?: RulesDetailProp;
  equalLength?: RulesDetailProp;
  password?: RulesDetailProp;
}

export const validate = (values: any, rules: RulesProp) => {
  let keys = Object.keys(rules);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let thisValue = values[key];
    let thisRule = rules[key];

    if (!thisRule) {
      continue;
    }
    let RuleKeys = Object.keys(thisRule);
    for (let k = 0; k < RuleKeys.length; k++) {
      let ruleKey = RuleKeys[k] as keyof RulesOptionProp;
      let ruleTempValue = thisRule[ruleKey]!;
      let thisMessage = ruleTempValue.message
        ? ruleTempValue.message
        : key + '.' + ruleKey;
      let ruleValue = ruleTempValue.value;
      switch (ruleKey) {
        case 'required':
          if (
            thisValue === null ||
            thisValue === undefined ||
            thisValue.length === 0
          ) {
            return thisMessage;
          }
          if (typeof thisValue === 'number') {
            if (isNaN(thisValue)) {
              return thisMessage;
            }
          }
          break;
        case 'email':
          let re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!re.test(String(thisValue).toLowerCase())) {
            return thisMessage;
          }
          break;
        case 'minLength':
          if (thisValue.length < ruleValue) {
            return thisMessage;
          }
          break;
        case 'maxLength':
          if (thisValue.length > ruleValue) {
            return thisMessage;
          }
          break;
        case 'equal':
          if (thisValue !== ruleValue) {
            return thisMessage;
          }
          break;
        case 'notEqual':
          if (thisValue === ruleValue) {
            return thisMessage;
          }
          break;
        case 'greater':
          if (thisValue <= ruleValue) {
            return thisMessage;
          }
          break;
        case 'lesser':
          if (thisValue >= ruleValue) {
            return thisMessage;
          }
          break;
        case 'equalLength':
          if (thisValue.length !== ruleValue) {
            return thisMessage;
          }
          break;
        case 'password':
          var pattern1 = /[0-9]/;
          var pattern2 = /[a-zA-Z]/;
          var pattern3 = /[~!@\#$%<>^&*]/; // 원하는 특수문자 추가 제거
          if (
            !pattern1.test(thisValue) ||
            !pattern2.test(thisValue) ||
            !pattern3.test(thisValue) ||
            thisValue.length < 8
          ) {
            return thisMessage;
          }
      }
    }
  }
  return null;
};

export const convertDate = (
  date: string | Date | undefined,
  method: string | undefined,
) => {
  let weekName = ['일', '월', '화', '수', '목', '금', '토'];
  if (typeof date === 'string') {
    let spli = date.split(' ');
    date = new Date(spli[0]);
  }

  if (date === undefined) {
    return '';
  }

  //강제로 타임존 조정
  //Todo : 이후 타임존 맞춰서 설정가능하도록 조치
  // if (Platform.OS === 'android') {
  //   date.setHours(date.getHours() + 9);
  // }

  let yyyy = date.getFullYear().toString();
  let yy = date.getFullYear().toString().substr(2, 2);
  let m = (date.getMonth() + 1).toString();
  let d = date.getDate().toString();
  let mmChars = m.split('');
  let ddChars = d.split('');

  let mm = mmChars[1] ? m : '0' + mmChars[0];
  let dd = ddChars[1] ? d : '0' + ddChars[0];
  let h = date.getHours();
  let i = date.getMinutes();
  let s = date.getSeconds();
  let hhChars = h.toString().split('');
  let iiChars = i.toString().split('');
  let ssChars = s.toString().split('');
  let hh = hhChars[1] ? h : '0' + hhChars[0];
  let ii = iiChars[1] ? i : '0' + iiChars[0];
  let ss = ssChars[1] ? s : '0' + ssChars[0];
  let text = '오전';

  if (h > 12) {
    h -= 12;
    text = '오후';
  }
  return method
    ?.replace('yyyy', yyyy)
    .replace('mm', mm)
    .replace('dd', dd)
    .replace('yy', yy)
    .replace('m', m)
    .replace('d', d)
    .replace('w', weekName[date.getDay()])
    .replace('half', text)
    .replace('hh', hh + '')
    .replace('ii', ii + '')
    .replace('ss', ss + '')
    .replace('h', h + '')
    .replace('i', i + '')
    .replace('s', s + '');
};

export const numberFormat = (value: string | number) => {
  // @ts-ignore
  if (value === 'NaN' || value === '' || isNaN(value)) {
    return '0';
  }

  if (value === undefined) {
    return '';
  }
  if (value === 0) {
    return '0';
  }

  var reg = /(^[+-]?\d+)(\d{3})/;
  var n = value + '';

  while (reg.test(n)) {
    n = n.replace(reg, '$1' + ',' + '$2');
  }

  return n;
};

export const arraysEqual = (a: any[], b: any[]) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
