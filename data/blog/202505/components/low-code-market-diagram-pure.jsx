import React from 'react';

const LowCodeMarketDiagram = () => {
  return (
    <div className="py-6 px-4 bg-gray-50 rounded-lg my-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">低代碼/無代碼市場概況</h2>
      
      {/* 市場規模部分 */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">市場規模與增長趨勢</h3>
        <p className="text-gray-600 mb-4">
          低代碼市場正以每年約30%的複合年增長率快速擴張，預計到2032年將達到2644億美元。
        </p>
        
        {/* 條形圖 - 純 CSS 實現 */}
        <div className="relative h-64 mt-6">
          <div className="flex justify-between items-end h-full">
            {/* 2023年 */}
            <div className="flex flex-col items-center w-1/5">
              <div className="bg-indigo-500 w-16 rounded-t" style={{height: '60px'}}></div>
              <p className="mt-2 font-semibold">2023</p>
              <p className="text-sm">24.8億美元</p>
            </div>
            
            {/* 2025年 */}
            <div className="flex flex-col items-center w-1/5">
              <div className="bg-indigo-500 w-16 rounded-t" style={{height: '90px'}}></div>
              <p className="mt-2 font-semibold">2025</p>
              <p className="text-sm">37.4億美元</p>
            </div>
            
            {/* 2028年 */}
            <div className="flex flex-col items-center w-1/5">
              <div className="bg-indigo-500 w-16 rounded-t" style={{height: '140px'}}></div>
              <p className="mt-2 font-semibold">2028</p>
              <p className="text-sm">68億美元</p>
            </div>
            
            {/* 2030年 */}
            <div className="flex flex-col items-center w-1/5">
              <div className="bg-indigo-500 w-16 rounded-t" style={{height: '180px'}}></div>
              <p className="mt-2 font-semibold">2030</p>
              <p className="text-sm">120億美元</p>
            </div>
            
            {/* 2032年 */}
            <div className="flex flex-col items-center w-1/5">
              <div className="bg-indigo-500 w-16 rounded-t" style={{height: '240px'}}></div>
              <p className="mt-2 font-semibold">2032</p>
              <p className="text-sm">264.4億美元</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 平台類型和應用領域 */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* 平台類型 */}
        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">主要平台類型</h3>
          
          {/* 企業應用開發平台 */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">企業應用開發平台</span>
              <span>35%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{width: '35%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">OutSystems, Mendix, Power Apps</p>
          </div>
          
          {/* 工作流自動化平台 */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">工作流自動化平台</span>
              <span>30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{width: '30%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">Make, n8n, Zapier</p>
          </div>
          
          {/* AI應用開發平台 */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">AI應用開發平台</span>
              <span>20%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '20%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">Dify, Coze, GPTBots</p>
          </div>
          
          {/* 數據整合平台 */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">數據整合平台</span>
              <span>15%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{width: '15%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">Airtable, Notion, Coda</p>
          </div>
        </div>
        
        {/* 應用領域 */}
        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">應用領域分布</h3>
          
          {/* 大型企業 */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">大型企業</span>
              <span>45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{width: '45%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">利用低代碼平台加速數位轉型</p>
          </div>
          
          {/* 中小企業 */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">中小企業</span>
              <span>35%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{width: '35%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">降低IT成本，提高競爭力</p>
          </div>
          
          {/* 政府與公共部門 */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">政府與公共部門</span>
              <span>10%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '10%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">改善公共服務和內部流程</p>
          </div>
          
          {/* 個人開發者 */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">個人開發者</span>
              <span>10%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{width: '10%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">獨立開發者和小型團隊</p>
          </div>
        </div>
      </div>
      
      {/* 市場趨勢 */}
      <div>
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">市場趨勢與機會</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-blue-600 mb-2">AI 整合</h4>
            <p className="text-sm">AI 與低代碼平台的深度整合，使非技術人員也能創建智能應用</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-green-600 mb-2">公民開發者</h4>
            <p className="text-sm">到2028年，公民開發者市場將保持21%的增長率</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-yellow-600 mb-2">定制化需求</h4>
            <p className="text-sm">低代碼平台基礎上的專業定制服務將成為重要增長點</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-orange-600 mb-2">行業特化</h4>
            <p className="text-sm">針對特定行業的低代碼解決方案將持續受到歡迎</p>
          </div>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-500 mt-8">
        數據來源: Forrester Research, Fortune Business Insights, PS Market Research (2025年預測)
      </div>
    </div>
  );
};

export default LowCodeMarketDiagram;