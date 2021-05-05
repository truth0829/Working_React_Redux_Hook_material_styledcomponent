
import styled from 'styled-components';

export const SidebarWraper = styled.div`
    width: 192px;
    min-height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 48px 30px 35px 30px;
    background: 
        linear-gradient(
            355.87deg, rgba(255, 255, 255, 0.05) 3.28%, 
            rgba(235, 235, 235, 0.05) 63.85%, 
            rgba(83, 138, 150, 0.025) 108.18%
        ), 
        #F6F6F6;

    box-shadow: 
        -7px -7px 14px #FFFFFF, 
        5px 5px 25px rgba(202, 208, 223, 0.85), 
        inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
}`;

export const SideTab = styled.div`{
    width: 100%;
    height: auto;
    margin-top: 30px;
}`;

export const TabItem = styled.div`{
    width: 100%;
    height: 40px;
    color: #333333;

    &:hover, &.active {
        background: 
            linear-gradient(
                321.07deg, rgba(0, 0, 0, 0.6) 1.82%, 
                rgba(255, 255, 255, 0) 98.83%
            ), 
            #618CF1;
        background-blend-mode: 
            soft-light, 
            normal;
        
        box-shadow: 
            inset 5px 5px 16px #3D6AD3, 
            inset -0.5px -0.5px 9px #658FF2;
        color: #FAFAFA;
    }
    &.unavailable {
        color: #CAD0DF;
    }
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 5px 0px;
}`;

export const Title = styled.div`{
    font-family: Syne;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    
    margin-left: 20px;
}`;

export const Icon = styled.div`{
    margin-right: 20px;
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}`;

export const ButtonGroup = styled.div`{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: auto;
}`;

export const Button = styled.div`{
    width: 90%;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0px;
    background: 
        linear-gradient(
            329.58deg, 
            rgba(255, 255, 255, 0.05) 9.56%, 
            rgba(92, 112, 162, 0.05) 87.95%
        ), 
        #F6F6F6;
    
    box-shadow: 
        -2px -3px 10px #FFFFFF, 
        0px 3px 10px rgba(202, 208, 223, 0.85), 
        inset 0px 0px 2px 1px rgba(255, 255, 255, 0.5);
    border-radius: 75px;
    
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
}`;