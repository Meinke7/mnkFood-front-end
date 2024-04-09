import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    

    main{
        display: flex;
        flex-direction: column;
        margin-bottom: 150px;

        >h2{
            font-weight: 500;
            font-size: 32px;

            max-width: 100%;
            
            margin: 50px 120px;
            margin: ${window.innerWidth < 832 ? '20px 20px' : '50px 120px'}
        }
    }

    @media (max-width: 700px){
        main{
            margin-bottom: 70px;
        }
    }
`;