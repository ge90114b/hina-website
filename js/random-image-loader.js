// random-image-loader.js  
document.addEventListener('DOMContentLoaded', function() {  
    // 获取图片元素的引用  
    const imgElement = document.getElementById('random-image');  
    
    // 发送请求获取 HTML 内容  
    fetch('https://pic.sorasakihina.love/dist/')  
      .then(response => response.text())  
      .then(html => {  
        // 使用正则表达式提取 body 中的数组  
        const regex = /<body>([\s\S]*?)<\/body>/;  
        const bodyMatch = html.match(regex);  
        if (!bodyMatch || bodyMatch.length < 2) {  
          alert('Failed to find body content');  
          return;  
        }  
    
        // 提取数组部分  
        const arrayString = bodyMatch[1].trim();  
    
        // 尝试将字符串转换为数组  
        let array;  
        try {  
          array = JSON.parse(arrayString);  
        } catch (e) {  
          alert('Failed to parse array');  
          return;  
        }  
    
        // 检查数组是否非空  
        if (!Array.isArray(array) || array.length === 0) {  
          alert('No elements in the array');  
          return;  
        }  
    
        // 从数组中随机选择一个元素  
        const randomElement = array[Math.floor(Math.random() * array.length)];  
    
        // 构建新的图片 URL  
        const imageUrl = `https://pic.sorasakihina.love/dist/${randomElement}`;  
    
        // 设置图片元素的 src 属性来显示图片  
        imgElement.src = imageUrl;  
      })  
      .catch(error => {  
        console.error('Error fetching content:', error);  
        alert('Error fetching content');  
      });  
  });