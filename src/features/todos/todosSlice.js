// 初期値を設定する
// 初期値のオブジェクトを作成する

const initialState =  {
  todos: []
}

// initialStateをデフォルト値として出力します
// デフォルトの関数を作成し、出力します。

const nextTodoId = (todos) => {
  // 配列.reduce(function(累積値、要素) {})
  // →累積値は、配列要素を順番に処理していった値、要素は現在処理されている配列要素
  // Math.max()→与えられた引数のうち、最大のものを返す
  const maxId = todos.reduce((maxId,todo)=>Math.max(todo.id,maxId),-1)
  return maxId + 1
} 

const appReducer = (state=initialState, action) => {
  // swicth構文を使用して、actiontype別で処理を分ける
  switch(action.type) {
    // todoAddedを定義する
    case 'todo/todoAdded': {
      return {
        // 今ある全てのtodoリストを返す
        ...state,
        // または、新しく作成されたtodo配列を加えた、todoリストを返す
        todos: [
          ...state.todos,
          {
            // idをstate=initialStateで代入した、todosから拾ってくる
            id: nextTodoId(state.todos),
            text: action.payload
          }
        ]
      }
    }

    case 'todo/todoToggled': {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          }
          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
    }

    default:
    return state
  }

}

export default appReducer

