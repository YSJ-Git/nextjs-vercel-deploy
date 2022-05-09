const Menus = () => {
    const datas = {
        "menus": [
            {
                "id": 1,
                "title": "gnb",
                "slug": "gnb",
                "createdAt": "2022-04-14T04:47:29.889Z",
                "updatedAt": "2022-04-14T05:30:49.993Z",
                "items": [
                    {
                        "id": 1,
                        "order": 0,
                        "title": "공지사항",
                        "url": "/notice",
                        "target": "_self",
                        "createdAt": "2022-04-14T04:47:50.560Z",
                        "updatedAt": "2022-04-14T05:30:49.963Z",
                        "custom_field": null,
                        "parent": null,
                        "children": [
                            {
                                "id": 5,
                                "order": 0,
                                "title": "1번게시글",
                                "url": "/notice/1",
                                "target": "_self",
                                "createdAt": "2022-04-14T05:29:30.486Z",
                                "updatedAt": "2022-04-14T05:30:49.963Z",
                                "custom_field": null,
                                "parent": {
                                    "id": 1
                                },
                                "children": []
                            },
                            {
                                "id": 6,
                                "order": 1,
                                "title": "2번게시글",
                                "url": "/notice/2",
                                "target": null,
                                "createdAt": "2022-04-14T05:29:50.314Z",
                                "updatedAt": "2022-04-14T05:30:49.963Z",
                                "custom_field": null,
                                "parent": {
                                    "id": 1
                                },
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "order": 1,
                        "title": "콘텐츠",
                        "url": "/contents/1",
                        "target": "_self",
                        "createdAt": "2022-04-14T04:56:11.730Z",
                        "updatedAt": "2022-04-14T05:30:49.963Z",
                        "custom_field": null,
                        "parent": null,
                        "children": [
                            {
                                "id": 7,
                                "order": 0,
                                "title": "콘텐츠-2차메뉴",
                                "url": "/contents/1",
                                "target": null,
                                "createdAt": "2022-04-14T05:30:17.539Z",
                                "updatedAt": "2022-04-14T05:30:49.963Z",
                                "custom_field": null,
                                "parent": {
                                    "id": 4
                                },
                                "children": [
                                    {
                                        "id": 8,
                                        "order": 0,
                                        "title": "콘텐츠-3차메뉴",
                                        "url": "",
                                        "target": null,
                                        "createdAt": "2022-04-14T05:30:33.523Z",
                                        "updatedAt": "2022-04-14T05:30:49.963Z",
                                        "custom_field": null,
                                        "parent": {
                                            "id": 7
                                        },
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "order": 2,
                        "title": "갤러리",
                        "url": "/gallery",
                        "target": "_self",
                        "createdAt": "2022-04-14T04:55:30.223Z",
                        "updatedAt": "2022-04-14T05:30:49.963Z",
                        "custom_field": null,
                        "parent": null,
                        "children": []
                    },
                    {
                        "id": 3,
                        "order": 3,
                        "title": "외부링크",
                        "url": "https://www.naver.com",
                        "target": "_blank",
                        "createdAt": "2022-04-14T04:55:49.662Z",
                        "updatedAt": "2022-04-14T05:30:49.963Z",
                        "custom_field": null,
                        "parent": null,
                        "children": []
                    }
                ]
            }
        ]
    }
    console.log(datas);

    return(<div>
        {datas.menus[0].items.map((data) => (
        <li key={data.id}>{data.title}</li>
        ))}
    </div>)
}

export default Menus;