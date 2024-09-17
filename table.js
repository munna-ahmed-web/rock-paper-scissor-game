const tableStr = `
+-------------+------+-------+----------+------+------+
| v PC\User > | Rock | Paper | 3rd move | 4th  | 5th  |
+-------------+------+-------+----------+------+------+
| Rock        | Draw | Win   | Win      | Lose | Lose |
+-------------+------+-------+----------+------+------+
| Paper       | Lose | Draw  | Win      | Win  | Lose |
+-------------+------+-------+----------+------+------+
| 3rd move    | Lose | Lose  | Draw     | Win  | Win  |
+-------------+------+-------+----------+------+------+
| 4th         | Win  | Lose  | Lose     | Draw | Win  |
+-------------+------+-------+----------+------+------+
| 5th         | Win  | Win   | Lose     | Lose | Draw |
+-------------+------+-------+----------+------+------+
`;

class Table {
  generateTable() {
    console.log(tableStr);
  }
}

module.exports = Table;
