const postData = async (url, data) => {             // async - означает, что внутри будет асинхронный код. ВСЕГДА используется с await
    const res = await fetch(url, {                  // await - означает что (прим. return-у) нужно дождатся выполнения этой операции (по стандарту срок ожидание до 30 сек.)
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
};


async function getResource(url) {             // async - означает, что внутри будет асинхронный код. ВСЕГДА используется с await
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
}


export { postData };
export { getResource };


