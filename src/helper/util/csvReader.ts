// src/utils/csvReader.ts
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export function readCSV(fileName: string): Promise<any[]> {
  const filePath = path.resolve('src/data', fileName);
  const results: any[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}