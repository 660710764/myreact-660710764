import React from 'react';
import './style.css';

const TodoList = () => {
    const todos = [
        { id: 1, text: 'ศึกษาภาษา HTML CSS', completed: true },
        { id: 2, text: 'ศึกษาภาษา Javascript', completed: true },
        { id: 3, text: 'ศึกษา Library React', completed: true },
        { id: 4, text: 'ศึกษาภาษา Golang', completed: true },
        { id: 5, text: 'ศึกษาการเขียน API', completed: false },
        { id: 6, text: 'เชื่อม Backend และ FrontEnd', completed: false },
        { id: 7, text: 'ทำ Website และ Deploy', completed: false }
    ];
    
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3 style={{ color: "#f0f0f0" }}>📝 รายการที่ต้องทำ</h3>

            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#262626ff',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#4caf50',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id} className='todo_items'  
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #2d2d2dff',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#1f1f1f' : '#2e2e2e',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#abababff' : '#e6e6e6ff'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;