document.getElementById('expense-form').addEventListener('submit', function(event) {
  event.preventDefault(); // フォーム送信を防ぐ

  // フォームの入力内容を取得
  const name = document.getElementById('expense-name').value;
  const amount = document.getElementById('expense-amount').value;

  // 新しい支出項目を作成
  const expenseItem = document.createElement('div');
  expenseItem.textContent = `${name}: ¥${amount}`;
  
  // 支出リストに追加
  document.getElementById('expense-list').appendChild(expenseItem);

  // フォームをリセット
  document.getElementById('expense-name').value = '';
  document.getElementById('expense-amount').value = '';
});
