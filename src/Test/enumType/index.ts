// 定义不可更改的类型 枚举本质上就是键值对，一个字符串作为键，对应一个数字，是划分类别很常用的类型。
enum NoYes {
  NO,
  YES,
}

enum ResultStatus {
  Success,
  Errors,
}

function handleChose(value: NoYes) {
  switch (value) {
    case NoYes.NO:
      return '否'
    case NoYes.YES:
      return '是'
    default:
      break
  }
}

class Explain {
  status: ResultStatus
  constructor(status: ResultStatus) {
    this.status = status
  }

  outputStatus(status: ResultStatus) {
    switch (status) {
      case ResultStatus.Success:
        return 'Success'
      case ResultStatus.Errors:
        return 'Errors'
      default:
        break
    }
  }
}

enum Hebdomad {
  Monday = '周一',
  Tuesday = '周二',
  Wednesday = '周三',
}

export { NoYes, handleChose, ResultStatus, Explain, Hebdomad }
