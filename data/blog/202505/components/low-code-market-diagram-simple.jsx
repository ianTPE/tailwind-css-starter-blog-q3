import React from 'react';

const LowCodeMarketDiagram = () => {
  // 市場規模預測數據
  const marketSizeData = [
    { year: '2023', value: 24.8 },
    { year: '2025', value: 37.4 },
    { year: '2028', value: 110.5 },
    { year: '2032', value: 264.4 },
  ];

  // 平台類型數據
  const platformTypes = [
    { name: '企業應用開發平台', value: 35 },
    { name: '工作流自動化平台', value: 30 },
    { name: 'AI應用開發平台', value: 20 },
    { name: '數據整合平台', value: 15 },
  ];

  // 應用領域數據
  const applicationAreas = [
    { name: '大型企業', value: 45 },
    { name: '中小企業', value: 35 },
    { name: '政府與公共部門', value: 10 },
    { name: '個人開發者', value: 10 },
  ];

  // 簡單的顏色陣列
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px 0', padding: '20px', border: '1px solid #eaeaea', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>低代碼/無代碼市場概況</h2>
      
      {/* 市場規模視覺化（簡化版本） */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px' }}>市場規模與增長趨勢</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px', marginTop: '20px' }}>
          {marketSizeData.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <div style={{ 
                height: `${item.value * 0.7}px`, 
                width: '60%', 
                backgroundColor: '#8884d8',
                borderRadius: '4px 4px 0 0'
              }}></div>
              <div style={{ marginTop: '8px', fontWeight: 'bold' }}>{item.year}</div>
              <div>${item.value}B</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', fontSize: '14px', color: '#666', marginTop: '10px' }}>
          低代碼市場正以每年約30%的複合年增長率擴張，預計到2032年將達到264.4億美元
        </div>
      </div>
      
      {/* 平台類型視覺化 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px' }}>主要平台類型</h3>
          <div style={{ marginTop: '20px' }}>
            {platformTypes.map((type, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: COLORS[index], marginRight: '10px' }}></div>
                  <span style={{ fontWeight: 'bold' }}>{type.name}</span>
                  <span style={{ marginLeft: 'auto' }}>{type.value}%</span>
                </div>
                <div style={{ 
                  height: '10px', 
                  backgroundColor: '#eee', 
                  borderRadius: '5px',
                  marginTop: '5px'
                }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${type.value}%`, 
                    backgroundColor: COLORS[index],
                    borderRadius: '5px'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 應用領域視覺化 */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px' }}>應用領域分布</h3>
          <div style={{ marginTop: '20px' }}>
            {applicationAreas.map((area, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: COLORS[index], marginRight: '10px' }}></div>
                  <span style={{ fontWeight: 'bold' }}>{area.name}</span>
                  <span style={{ marginLeft: 'auto' }}>{area.value}%</span>
                </div>
                <div style={{ 
                  height: '10px', 
                  backgroundColor: '#eee', 
                  borderRadius: '5px',
                  marginTop: '5px'
                }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${area.value}%`, 
                    backgroundColor: COLORS[index],
                    borderRadius: '5px'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 市場趨勢區塊 */}
      <div>
        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px' }}>市場趨勢與機會</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
          <div style={{ flex: '1 1 200px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
            <h4 style={{ color: '#0088FE', marginTop: 0 }}>AI 整合</h4>
            <p style={{ margin: 0 }}>AI 與低代碼平台的深度整合，使非技術人員也能創建智能應用</p>
          </div>
          <div style={{ flex: '1 1 200px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
            <h4 style={{ color: '#00C49F', marginTop: 0 }}>公民開發者</h4>
            <p style={{ margin: 0 }}>到2028年，公民開發者市場將保持21%的增長率</p>
          </div>
          <div style={{ flex: '1 1 200px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
            <h4 style={{ color: '#FFBB28', marginTop: 0 }}>定制化需求</h4>
            <p style={{ margin: 0 }}>低代碼平台基礎上的專業定制服務將成為重要增長點</p>
          </div>
          <div style={{ flex: '1 1 200px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
            <h4 style={{ color: '#FF8042', marginTop: 0 }}>行業特化</h4>
            <p style={{ margin: 0 }}>針對特定行業的低代碼解決方案將持續受到歡迎</p>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', fontSize: '12px', color: '#999', marginTop: '30px' }}>
        數據來源: Forrester Research, Fortune Business Insights, PS Market Research (2025年預測)
      </div>
    </div>
  );
};

export default LowCodeMarketDiagram;