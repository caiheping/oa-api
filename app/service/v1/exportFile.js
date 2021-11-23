'use strict';

const Service = require('egg').Service;
// 引入exceljs
const ExcelJS = require('exceljs');

class CommonService extends Service {
  /**
   * 导出接口
   * @param {*} data [{
        sheet: 'test',
        columns: [
          {
            name: 'test1',
          },
          {
            name: 'test2',
          },
        ],
        rows: [
          [ '2019-07-20', 55 ],
        ],
      }]
   * @returns buffer
   */

  async exportExcel(data = []) {
    const wb = new ExcelJS.Workbook();
    if (data && data.length) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].sheet && data[i].columns && data[i].rows) {
          const ws = wb.addWorksheet(data[i].sheet);
          ws.addTable({
            name: data[i].sheet,
            ref: 'A1',
            style: {
              showRowStripes: true,
            },
            columns: data[i].columns,
            rows: data[i].rows,
          });
          for (let j = 0; j < data[i].columns.length; j++) {
            ws.getColumn(j + 1).alignment = { wrapText: true, indent: 1, vertical: 'middle', horizontal: 'center' };
            Object.keys(data[i].columns[j]).forEach(key => {
              ws.getColumn(j + 1)[key] = data[i].columns[j][key];
            });
          }
          ws.getRow(1).font = { name: 'Arial', size: 12, bold: true };
        }
      }
    } else {
      return;
    }

    // 写入 buffer
    const buffer = await wb.xlsx.writeBuffer();
    return buffer;
  }
}

module.exports = CommonService;
