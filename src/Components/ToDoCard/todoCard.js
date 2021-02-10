import React from "react";
import {Card} from '@uifabric/react-cards'
import { FontSizes, FontWeights, IconButton, initializeIcons, Text } from "@fluentui/react";

function TodoCard({title, description, onclick, date}) {
  initializeIcons();
    const cardTokens = { childrenMargin: 12, maxWidth: 450  };
    const siteTextStyles= {
        root: {
          fontSize: FontSizes.size28,
          fontWeight: FontWeights.semibold,
        },
      };
      const descriptionTextStyles = {
        root: {
          fontSize: FontSizes.size18,

          fontWeight: FontWeights.semibold,
        },
      };

      const subduedTextStyles = {
        root: {

          fontSize: FontSizes.size14
        },
      };

  const forwardIcon = {iconName: 'Forward'} 
  const disabled = false;
      
  return (
    <div className='' style={{width:"100%"}}>
      <Card className="ms-depth-16"
        tokens={cardTokens}
      >
        <Card.Section>
          <Text variant="small" styles={siteTextStyles}>
            {title}
          </Text>
          <Text styles={descriptionTextStyles}>
            {description}
          </Text>
          {/* <Text variant="small" styles={descriptionTextStyles}>
              Tuesday 2:00-4:30 pm
            </Text> */}
            <Text variant="small" styles={subduedTextStyles}>
             {date}
            </Text>
            <IconButton onClick={onclick} iconProps={forwardIcon} title="Forward" disabled={disabled} />
        </Card.Section>
        
      </Card>
    </div>
  );
}

export default TodoCard;
