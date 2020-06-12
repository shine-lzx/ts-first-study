// 定义不可更改的类型
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
