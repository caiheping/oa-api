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
          wb.addWorksheet(data[i].sheet).addTable({
            ref: 'A1',
            columns: data[i].columns,
            rows: data[i].rows,
          });
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
