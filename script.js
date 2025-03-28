document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const expenseDate = document.getElementById('expense-date').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    
    console.log(`支出項目: ${itemName}, 日付: ${expenseDate}, 金額: ¥${amount}, カテゴリ: ${category}`);
});

// 他の機能も追加できます
