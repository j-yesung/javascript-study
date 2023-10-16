// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }

// async function narutoIsNotOtaku() {
//   let title = prompt('애니메이션 제목을 입력하세요.', 'naruto');

//   try {
//     let res = await loadJson(`https://animechan.vercel.app/api/random/anime?title=${title}`);
//     alert(`${res.character}: ${res.quote}.`);
//     return res;
//   } catch (err) {
//     if (err instanceof HttpError && err.response.status == 404) {
//       alert('일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!');
//       return narutoIsNotOtaku();
//     } else {
//       throw err;
//     }
//   }
// }

// narutoIsNotOtaku();
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

function narutoIsNotOtaku() {
  let title = prompt('애니메이션 제목을 입력하세요.', 'naruto');

  return loadJson(`https://animechan.vercel.app/api/random/anime?title=${title}`)
    .then(res => {
      alert(`${res.character}: ${res.quote}.`);
      return res;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!');
        return narutoIsNotOtaku();
      } else {
        throw err;
      }
    });
}

narutoIsNotOtaku();
