// 发送 GET 请求并处理响应  
var imgElement = document.getElementById('random-image'); 
fetch('https://pic.sorasakihina.love/dist/')  
  .then(response => response.text()) // 获取响应文本  
  .then(html => {  
    // 使用正则表达式匹配 <pre> 标签内的内容 
    console.log(html); 
    // 去除字符串中的换行符和空格  
    const cleanedHtml = html.replace(/[\n\s]+/g, '');  
    
    // 现在使用 cleanedHtml 来匹配 <pre> 标签内容  
    const preContentMatch = cleanedHtml.match(/<body>([\s\S]*?)<\/body>/);
    console.log(preContentMatch);
    ar=preContentMatch[1];
    console.log(ar);
      // 假设 preContent 包含有效的 JSON 数组  
      try {  
        const array = JSON.parse(ar); // 解析 JSON 数组  
        if (Array.isArray(array) && array.length > 0) {  
          // 从数组中随机选择一个元素  
          const randomElement = array[Math.floor(Math.random() * array.length)];  
            
          // 构造新的 URL  
          const newUrl = `https://pic.sorasakihina.love/dist/${randomElement}`;  
            
          // 打印新的 URL 到控制台  
          console.log(newUrl); 
          imgElement.src = newUrl;

        } else {  
          console.error('提取的内容不是一个有效的数组或数组为空');  
        }  
      } catch (e) {  
        console.error('无法解析 <pre> 标签内的内容为 JSON 数组', e);  
      }  
    } 
  )  
  .catch(error => {  
    console.error('请求失败', error);  
  });